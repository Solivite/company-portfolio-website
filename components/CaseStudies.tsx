import { CASE_STUDIES } from "@/lib/case-studies-data";
import CaseStudyGrid from "@/components/work/CaseStudyGrid";

export default function CaseStudies() {
  return <CaseStudyGrid studies={CASE_STUDIES} />;
}
