import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    name: "Event Registration and Accreditation Platform",
    summary:
      "Built a multi-category registration platform with webhook-confirmed Naira payments, signed QR badge generation for event check-in, and a self-serve onboarding portal with photo validation and admin approval.",
    tags: ["Golang", "Supabase", "Gin-gonic", "Paystack", "Next.js", "TailwindCSS" ,"Lucide-react", ],
  },
  {
    name: "MedCheck",
    summary:
      "An end-to-end traceability system to combat drug counterfeiting, utilizing unique serialization to track pharmaceutical provenance from the manufacturing plant to the end consumer.",
    tags: ["Java", "PostgreSQL", "Dart", "Flutter", "Spring Boot", "Next.js", "Monolithic Architecture", "Restful API",],
  },
  {
    name: "School Management Portal (ePortal)",
    summary:
      "Built a school management backend with bulk student and staff registration from Excel uploads (Apache POI), validated with Jakarta Bean Validation and returning RFC 9457 error responses through a centralized exception handler.",
    tags: ["Spring Boot", "MongoDB", "Next.js", "TailwindCSS", "Lucide-react", "Java", "Apache POI", "Jakarta Bean Validation", "Restful API",],
  },
  {
    name: "CampusPlacement",
    summary:
      "An end-to-end Scikit-Learn preprocessing pipeline for a 100,000-entry dataset, integrating stratified sampling for balanced target distribution with dynamic feature transformation (ordinal/one-hot encoding and standard scaling) to process mixed data types.",
    tags: ["Python", "FastAPI", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Streamlit"],
  },
  {
    name: "KutIt",
    summary:
      "A collision-resistant URL shortening service by engineering a high-entropy algorithm in Java that utilizes a base-62 alphanumeric character set to generate over 3.5 trillion unique, 7-character identifiers.",
    tags: ["React + Vite", "Java", "Springboot", "MySQL"],
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
          A few examples of the kind of projects I enjoy shipping.
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
