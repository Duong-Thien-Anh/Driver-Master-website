import { SiteHeader } from "@/features/landing/components/SiteHeader";
import { SiteFooter } from "@/features/landing/components/SiteFooter";

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#fff8ec] text-[#14284b]"><SiteHeader /><main className="min-h-[calc(100vh-230px)] bg-[#fff8ec] text-[#14284b]">{children}</main><SiteFooter /></div>;
}
