import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { SERVICE_PAGES } from "@/lib/services-data";

const data = SERVICE_PAGES.development;

export const metadata: Metadata = {
  title: `${data.title} | Solivite Solutions`,
  description: data.metaDescription,
};

export default function DevelopmentServicesPage() {
  return <ServicePage data={data} />;
}
