import { Mail } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="mt-8 flex flex-col gap-6 border-t-2 border-[#0A0A0A] py-8 font-sans text-sm text-[#525252]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl font-normal leading-relaxed text-[#525252]">
          Available for backend-focused work, cloud builds, and product-minded engineering.
        </p>
        <a
          href="mailto:bolajidurodola@gmail.com"
          className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.06em] text-[#0A0A0A] border-b-2 border-[#0A0A0A] pb-0.5 transition-colors hover:border-[#EF4444] hover:text-[#EF4444] w-fit"
        >
          <Mail className="h-4 w-4" />
          <span>bolajidurodola@gmail.com</span>
        </a>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-[#E5E5E5] pt-4 text-[11px] font-mono uppercase tracking-[0.12em] text-[#525252]">
        <span>© {new Date().getFullYear()} DURODOLA ABOLAJI TOLIAT</span>
        <span>ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}
