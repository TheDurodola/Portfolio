import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experience = [
  "Backend engineering with a focus on service design, stable APIs, and operational clarity.",
  "Cloud interest across deployment pipelines, infrastructure choices, and production readiness.",
  "Comfortable working across the stack when it improves delivery, but happiest near the server and data plane.",
] as const;

export default function ExperienceSection() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="mb-8 border-b-2 border-[#0A0A0A] pb-4">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#525252]">
          <span className="h-2 w-2 bg-[#EF4444]" />
          <span>SECTION // 01</span>
        </div>
        <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-normal tracking-[-0.02em] text-[#0A0A0A]">
          EXPERIENCE
        </h2>
        <p className="mt-2 max-w-2xl font-sans text-base leading-7 text-[#525252]">
          The themes that guide how I build and communicate.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {experience.map((item, index) => (
          <Card
            key={item}
            variant={index === 0 ? "elevated" : "default"}
            className="flex flex-col justify-between p-6 sm:p-8"
          >
            <CardHeader className="p-0 pb-6">
              <div className="flex items-center justify-between">
                <CardTitle className="font-mono text-3xl font-bold text-[#0A0A0A]">
                  {`0${index + 1}`}
                </CardTitle>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#525252]">
                  [ PRINCIPLE ]
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="font-sans text-base leading-relaxed text-[#0A0A0A]">
                {item}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
