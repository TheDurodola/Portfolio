import LogoMark from "@/components/logo-mark";

export default function SiteHeader() {
  return (
    <header className="flex w-full items-center justify-between border-b-2 border-[#0A0A0A] pb-6 pt-4">
      <div className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#525252]">
        <span className="inline-block h-2 w-2 bg-[#EF4444]" />
        <span>VOL. 26 // PORTFOLIO</span>
      </div>
      <div className="flex-1 flex justify-center">
        <LogoMark />
      </div>
      <div className="hidden sm:flex items-center text-[11px] font-bold uppercase tracking-[0.12em] text-[#525252]">
        <span>BACKEND & DISTRIBUTED SYSTEMS</span>
      </div>
    </header>
  );
}
