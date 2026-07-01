"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  Color,
  Group,
  InstancedMesh,
  Matrix4,
  MeshBasicMaterial,
  Object3D,
  Raycaster,
  SphereGeometry,
  Vector2,
  Vector3,
} from "three";

const ROTATION_SPEED = 0.1;
const OSCILLATION_AMPLITUDE = 0.035;
const POINTER_LERP = 10;
const STRENGTH_LERP = 8;
const TUNNEL_RADIUS = 0.32;
const TUNNEL_PUSH = 0.35;

function hash01(seed: number) {
  const x = Math.sin(seed * 127.1 + seed * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function sampleLine(a: Vector3, b: Vector3, count: number): Vector3[] {
  const points: Vector3[] = [];
  const temp = new Vector3();
  for (let i = 0; i < count; i++) {
    temp.copy(a).lerp(b, i / (count - 1));
    points.push(temp.clone());
  }
  return points;
}

function sampleEllipse(
  center: Vector3,
  radiusX: number,
  radiusY: number,
  count: number,
): Vector3[] {
  const points: Vector3[] = [];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    points.push(
      new Vector3(
        center.x + Math.cos(angle) * radiusX,
        center.y + Math.sin(angle) * radiusY,
        center.z,
      ),
    );
  }
  return points;
}

function funnelWidthAtY(y: number, topY: number, bottomY: number, topW: number, bottomW: number) {
  const t = (topY - y) / (topY - bottomY);
  return topW + (bottomW - topW) * t;
}

/** Particle layout approximating a conversion funnel with stage rings. */
function buildFunnelPoints(): Vector3[] {
  const points: Vector3[] = [];
  const topY = 0.52;
  const bottomY = -0.42;
  const topW = 0.92;
  const bottomW = 0.26;
  const z = 0;

  points.push(
    ...sampleLine(new Vector3(-topW / 2, topY, z), new Vector3(topW / 2, topY, z), 52),
  );
  points.push(
    ...sampleLine(
      new Vector3(-topW / 2, topY, z),
      new Vector3(-bottomW / 2, bottomY, z),
      58,
    ),
  );
  points.push(
    ...sampleLine(
      new Vector3(topW / 2, topY, z),
      new Vector3(bottomW / 2, bottomY, z),
      58,
    ),
  );
  points.push(
    ...sampleLine(
      new Vector3(-bottomW / 2, bottomY, z),
      new Vector3(bottomW / 2, bottomY, z),
      28,
    ),
  );

  [0.22, 0.02, -0.18].forEach((y) => {
    const w = funnelWidthAtY(y, topY, bottomY, topW, bottomW) * 0.88;
    points.push(...sampleLine(new Vector3(-w / 2, y, z), new Vector3(w / 2, y, z), 36));
  });

  points.push(...sampleEllipse(new Vector3(0, bottomY - 0.06, z), 0.18, 0.04, 32));

  const dripCenter = new Vector3(0, bottomY - 0.18, z);
  for (let i = 0; i < 28; i++) {
    const t = i / 27;
    const spread = 0.04 * (1 - t);
    const angle = hash01(i * 7.1) * Math.PI * 2;
    points.push(
      new Vector3(
        dripCenter.x + Math.cos(angle) * spread,
        dripCenter.y - t * 0.14,
        dripCenter.z,
      ),
    );
  }

  const arrowY = topY + 0.12;
  points.push(...sampleLine(new Vector3(0, arrowY + 0.12, z), new Vector3(0, arrowY, z), 16));
  points.push(
    ...sampleLine(new Vector3(-0.07, arrowY + 0.04, z), new Vector3(0, arrowY, z), 12),
  );
  points.push(
    ...sampleLine(new Vector3(0.07, arrowY + 0.04, z), new Vector3(0, arrowY, z), 12),
  );

  return points;
}

type ParticleSeed = {
  basePosition: Vector3;
  normal: Vector3;
  scale: number;
  phase: number;
  speed: number;
};

export default function ParticleFunnelScene() {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<InstancedMesh>(null);
  const dummyRef = useRef(new Object3D());
  const mouseClient = useRef({ x: 0, y: 0, active: false });
  const pointerNdc = useRef(new Vector2(0, 0));
  const targetStrength = useRef(0);
  const currentStrength = useRef(0);
  const invGroupMatrixRef = useRef(new Matrix4());
  const raycasterRef = useRef(new Raycaster());

  const { geometry, material, particles } = useMemo(() => {
    const positions = buildFunnelPoints();
    const seeds: ParticleSeed[] = positions.map((pos, i) => {
      const normal = pos.clone().normalize();
      if (normal.lengthSq() < 1e-4) normal.set(0, 1, 0);
      return {
        basePosition: pos,
        normal,
        scale: 0.015 + hash01(i * 2.6) * 0.01,
        phase: hash01(i * 3.9) * Math.PI * 2,
        speed: 0.48 + hash01(i * 5.2) * 0.42,
      };
    });

    const geo = new SphereGeometry(0.5, 5, 4);
    const mat = new MeshBasicMaterial({
      color: new Color("#d8b4fe"),
      transparent: true,
      opacity: 0.88,
    });

    return { geometry: geo, material: mat, particles: seeds };
  }, []);

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouseClient.current = { x: event.clientX, y: event.clientY, active: true };
    };
    const onLeave = () => {
      mouseClient.current.active = false;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useFrame((state, delta) => {
    const group = groupRef.current;
    const mesh = meshRef.current;
    if (!group || !mesh) return;

    group.rotation.y += delta * ROTATION_SPEED;

    const { camera, gl } = state;
    const rect = gl.domElement.getBoundingClientRect();
    const mouse = mouseClient.current;
    const inCanvas =
      mouse.active &&
      mouse.x >= rect.left &&
      mouse.x <= rect.right &&
      mouse.y >= rect.top &&
      mouse.y <= rect.bottom;

    targetStrength.current = inCanvas ? 1 : 0;

    const pointerLerp = 1 - Math.exp(-POINTER_LERP * delta);
    const strengthLerp = 1 - Math.exp(-STRENGTH_LERP * delta);

    if (inCanvas) {
      pointerNdc.current.x +=
        (((mouse.x - rect.left) / rect.width) * 2 - 1 - pointerNdc.current.x) * pointerLerp;
      pointerNdc.current.y +=
        (-((mouse.y - rect.top) / rect.height) * 2 + 1 - pointerNdc.current.y) * pointerLerp;
    }
    currentStrength.current += (targetStrength.current - currentStrength.current) * strengthLerp;

    const raycaster = raycasterRef.current;
    raycaster.setFromCamera(pointerNdc.current, camera);
    const rayOrigin = raycaster.ray.origin.clone();
    const rayDir = raycaster.ray.direction.clone().normalize();

    group.updateMatrixWorld();
    invGroupMatrixRef.current.copy(group.matrixWorld).invert();

    const time = state.clock.elapsedTime;
    const dummy = dummyRef.current;
    const tunnelStrength = currentStrength.current;

    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      const wave =
        Math.sin(time * particle.speed + particle.phase) * OSCILLATION_AMPLITUDE;

      const localPos = particle.basePosition.clone().addScaledVector(particle.normal, wave);
      const worldPos = localPos.clone().applyMatrix4(group.matrixWorld);

      if (tunnelStrength > 0.001) {
        const toPoint = worldPos.clone().sub(rayOrigin);
        const projection = toPoint.dot(rayDir);
        const closest = rayOrigin.clone().addScaledVector(rayDir, projection);
        const axisDistance = worldPos.distanceTo(closest);

        if (axisDistance < TUNNEL_RADIUS) {
          const influence = smoothstep(TUNNEL_RADIUS, 0, axisDistance);
          const pushDir = worldPos.clone().sub(closest);
          if (pushDir.lengthSq() > 1e-5) {
            pushDir.normalize().multiplyScalar(TUNNEL_PUSH * influence * tunnelStrength);
            worldPos.add(pushDir);
          }
        }
      }

      localPos.copy(worldPos).applyMatrix4(invGroupMatrixRef.current);
      dummy.position.copy(localPos);
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef} position={[0, -0.05, 0]}>
      <instancedMesh
        ref={meshRef}
        args={[geometry, material, particles.length]}
        frustumCulled={false}
      />
    </group>
  );
}
