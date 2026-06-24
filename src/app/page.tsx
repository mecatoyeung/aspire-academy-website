import { defaultLocale } from "@/i18n/config";
import { MarketingSite } from "@/components/marketing-site";

export default function RootPage() {
  return <MarketingSite locale={defaultLocale} currentPage="home" />;
}