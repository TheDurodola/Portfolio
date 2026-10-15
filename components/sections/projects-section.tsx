import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    name: "Platform API",
    summary:
      "A backend service designed for predictable request handling, clean contracts, and long-term maintainability.",
    tags: ["APIs", "Auth", "Testing"],
  },
  {
    name: "Cloud deployment pipeline",
    summary:
      "A delivery workflow for shipping backend releases with safer rollouts and clearer operational visibility.",
    tags: ["CI/CD", "Cloud", "Observability"],
  },
  {
    name: "Data-heavy service layer",
    summary:
      "A service layer optimized around database access patterns, throughput, and dependable system behavior.",
    tags: ["Postgres", "Caching", "Performance"],
  },
] as const;

export default function ProjectsSection() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="mb-8 border-b-2 border-[#0A0A0A] pb-4">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#525252]">
          <span className="h-2 w-2 bg-[#EF4444]" />
          <span>SECTION // 02</span>
        </div>
        <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-normal tracking-[-0.02em] text-[#0A0A0A]">
          PROJECTS
        </h2>
        <p className="mt-2 max-w-2xl font-sans text-base leading-7 text-[#525252]">
          A few examples of the kind of backend and cloud-oriented work I enjoy
          shipping.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            variant={index === 0 ? "elevated" : "default"}
            className="p-6 sm:p-8"
          >
            <CardHeader className="p-0 pb-4">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.15em] text-[#525252] mb-2">
                <span>{`[ CASE STUDY 0${index + 1} ]`}</span>
                <span className="text-[#0A0A0A] font-bold">SYSTEM BUILD</span>
              </div>
              <CardTitle className="text-2xl sm:text-3xl text-[#0A0A0A]">
                {project.name}
              </CardTitle>
              <CardDescription className="mt-2 text-base leading-relaxed text-[#525252]">
                {project.summary}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 pt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center border-2 border-[#D4D4D4] bg-transparent px-3.5 py-1 font-sans text-[12px] font-bold uppercase tracking-[0.04em] text-[#525252] transition-colors hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] cursor-default select-none"
                >
                  {tag}
                </span>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
