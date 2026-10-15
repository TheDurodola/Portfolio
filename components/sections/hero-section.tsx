import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  const stats = [
    ["Design", "stable contracts and practical service boundaries"],
    ["Build", "deployment awareness and production readiness"],
    ["Maintain", "reliable storage, queries, and performance"],
  ] as const;

  return (
    <section className="grid flex-1 items-start gap-12 py-12 lg:grid-cols-[1.25fr_0.75fr] lg:py-16">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#525252]">
          <span className="h-2 w-2 bg-[#EF4444]" />
          <span>LEDE ESSAY // ARCHITECTURE</span>
        </div>

        <h1 className="mt-4 font-heading text-4xl sm:text-6xl lg:text-[68px] leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] text-balance">
          I design reliable backend systems for products that need to scale
          without drama.
        </h1>

        <blockquote className="mt-8 border-l-4 border-[#EF4444] pl-6 py-2 font-sans text-lg sm:text-xl font-normal italic leading-[1.65] text-[#0A0A0A]">
          I focus on APIs, service architecture, data flow, and pragmatic cloud
          delivery. My work is built for teams that care about maintainability,
          observability, and shipping real value.
        </blockquote>

        <div className="mt-8 flex justify-center">
          <Button variant="default" size="lg">
            Download resume
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 border-t-2 border-[#0A0A0A] pt-6 sm:grid-cols-3">
          {stats.map(([title, description], index) => (
            <div key={title} className="flex flex-col">
              <span className="font-mono text-xs font-bold text-[#525252]">
                {`0${index + 1} //`}
              </span>
              <span className="mt-1 font-heading text-lg font-normal text-[#0A0A0A]">
                {title}
              </span>
              <p className="mt-1 font-sans text-xs sm:text-sm leading-6 text-[#525252]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-full">
        <Card variant="strong" className="h-full bg-[#FAFAFA] p-6 flex flex-col justify-between">
          <CardContent className="p-0 flex flex-col h-full justify-between">
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3 text-[11px] font-mono uppercase tracking-[0.12em] text-[#525252]">
              <span>[ FIG. 01 — THE ENGINEER ]</span>
              <span className="text-[#0A0A0A] font-bold">2026</span>
            </div>

            <div className="relative my-6 aspect-square w-full overflow-hidden border-2 border-[#0A0A0A] bg-[#FAFAFA]">
              <Image
                src="/profilepicture.jpeg"
                alt="Durodola Abolaji Toliat"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-between border-t border-[#E5E5E5] pt-3 text-[11px] font-mono text-[#525252]">
              <span>DURODOLA ABOLAJI TOLIAT</span>
              <span className="inline-flex items-center gap-1.5 font-bold text-[#16A34A]">
                <span className="inline-block h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
                ACTIVE
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
