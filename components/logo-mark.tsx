import Link from "next/link";

export default function LogoMark() {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="inline-flex items-center justify-center border-2 border-[#0A0A0A] bg-[#FAFAFA] px-5 py-2 font-heading text-sm tracking-[0.35em] text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-[#FAFAFA] focus-visible:shadow-[0_0_0_2px_#FAFAFA,0_0_0_4px_#0A0A0A] focus-visible:outline-none"
    >
      TheDurodola
    </Link>
  );
}
