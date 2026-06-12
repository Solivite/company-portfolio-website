"use client";

import type { ServicePageData } from "@/lib/services-data";
import ServiceHero from "./ServiceHero";
import ServiceDeliverables from "./ServiceDeliverables";
import ServiceSubOfferings from "./ServiceSubOfferings";
import ServiceProcess from "./ServiceProcess";
import ServiceTools from "./ServiceTools";
import ServiceCTA from "./ServiceCTA";

interface ServicePageProps {
  data: ServicePageData;
}

export default function ServicePage({ data }: ServicePageProps) {
  const isDark = data.hero.theme === "dark";

  return (
    <>
      <ServiceHero data={data} />
      {data.subOfferings && (
        <ServiceSubOfferings offerings={data.subOfferings} dark={isDark} />
      )}
      <ServiceDeliverables
        deliverables={data.deliverables}
        title={data.title}
        dark={!isDark}
      />
      <ServiceProcess process={data.process} dark={isDark} />
      <ServiceTools tools={data.tools} dark={!isDark} />
      <ServiceCTA cta={data.cta} />
    </>
  );
}
