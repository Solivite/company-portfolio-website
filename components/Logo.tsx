"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "landscape" | "square";
  className?: string;
  showText?: boolean;
}

export default function Logo({ variant = "landscape", className = "", showText = true }: LogoProps) {
  // Placeholder for logo - replace with actual logo images
  // For landscape: use a wide logo (e.g., 200x50)
  // For square: use a square logo (e.g., 50x50)
  
  const logoSize = variant === "landscape" ? { width: 200, height: 50 } : { width: 50, height: 50 };
  
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      {variant === "square" ? (
        // Square logo version
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">S</span>
        </div>
      ) : (
        // Landscape logo version - replace with actual image
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          {showText && (
            <span className="font-display font-bold text-xl text-white">Solivite</span>
          )}
        </div>
      )}
      
      {/* Uncomment and use when you have actual logo images */}
      {/* 
      <Image
        src={variant === "landscape" ? "/logo-landscape.png" : "/logo-square.png"}
        alt="Solivite Logo"
        width={logoSize.width}
        height={logoSize.height}
        className="object-contain"
        priority
      />
      {showText && variant === "landscape" && (
        <span className="font-display font-bold text-xl text-white">Solivite</span>
      )}
      */}
    </Link>
  );
}

