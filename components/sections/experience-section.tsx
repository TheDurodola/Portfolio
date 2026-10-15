import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ExperienceItem {
  role: string;
  field: string;
  company: string;
  period: string;
  description: string;
  focusAreas: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Full-Stack Engineer",
    field: "Distributed Systems & Cloud Architecture",
    company: "Contract & Independent",
    period: "2024 — PRESENT",
    description:
      "Designing resilient service boundaries, stable REST and gRPC contracts, reliable database layers, and automated cloud release pipelines.",
    focusAreas: [
      "Backend engineering with a focus on service design, stable APIs, and operational clarity across distributed architectures",
      "Cloud interest across deployment pipelines, containerized infrastructure choices, and production readiness",
      "Designing relational data schemas, query optimization, and dependable storage layers on PostgreSQL and Redis",
    ],
    technologies: [
      "Golang",
      "Java",
      "Python",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "AWS",
      "RabbitMQ",
      "Microservices",
      "CI/CD",
      "Next.js",
      "Gin-Gonic",
      "Spring Boot",
      "MongoDB",
      "Supabase",
    ],
  },
  {
    role: "Software Engineer",
    field: "Distributed Systems & Cloud Architecture",
    company: "Semicolon Africa",
    period: "2024 — PRESENT",
    description:
      "Designing resilient service boundaries, stable REST and gRPC contracts, reliable database layers, and automated cloud release pipelines.",
    focusAreas: [
      "Backend engineering with a focus on service design, stable APIs, and operational clarity across distributed architectures",
      "Cloud interest across deployment pipelines, containerized infrastructure choices, and production readiness",
      "Designing relational data schemas, query optimization, and dependable storage layers on PostgreSQL and Redis",
    ],
    technologies: [
      "Golang",
      "Java",
      "PostgreSQL",
      "Docker",
      "AWS",
      "RabbitMQ",
      "Microservices",
      "CI/CD",
    ],
  },
  {
    role: "IT Support Specialist",
    field: "Distributed Systems & Cloud Architecture",
    company: "CrownCrystal Technologies",
    period: "2024 — PRESENT",
    description:
      "Designing resilient service boundaries, stable REST and gRPC contracts, reliable database layers, and automated cloud release pipelines.",
    focusAreas: [
      "Backend engineering with a focus on service design, stable APIs, and operational clarity across distributed architectures",
      "Cloud interest across deployment pipelines, containerized infrastructure choices, and production readiness",
      "Designing relational data schemas, query optimization, and dependable storage layers on PostgreSQL and Redis",
    ],
    technologies: [
      "Golang",
      "Java",
      "PostgreSQL",
      "Docker",
      "AWS",
      "RabbitMQ",
      "Microservices",
      "CI/CD",
    ],
  },
  {
    role: "Software Engineer Intern",
    field: "Distributed Systems & Cloud Architecture",
    company: "Semicolon Africa",
    period: "2024 — PRESENT",
    description:
      "Designing resilient service boundaries, stable REST and gRPC contracts, reliable database layers, and automated cloud release pipelines.",
    focusAreas: [
      "Backend engineering with a focus on service design, stable APIs, and operational clarity across distributed architectures",
      "Cloud interest across deployment pipelines, containerized infrastructure choices, and production readiness",
      "Designing relational data schemas, query optimization, and dependable storage layers on PostgreSQL and Redis",
    ],
    technologies: [
      "Golang",
      "Java",
      "PostgreSQL",
      "Docker",
      "AWS",
      "RabbitMQ",
      "Microservices",
      "CI/CD",
    ],
  },
];

const specializedExperience = [
  {
    category: "SERVICE ARCHITECTURE",
    title: "API Design & Domain Boundaries",
    description:
      "Designing clean contracts, type-safe API communication, and practical microservice or modular monolith architectures.",
    tags: ["Golang", "gRPC", "REST APIs", "Clean Architecture", "Spring Boot"],
  },
  {
    category: "CLOUD & INFRASTRUCTURE",
    title: "Deployment Awareness & Reliability",
    description:
      "Automating containerized delivery pipelines, infrastructure setup, and operational observability for backend services.",
    tags: ["Docker", "AWS", "CI/CD", "Monitoring", "Linux"],
  },
];

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
          The themes, roles, and engineering practices that guide how I build
          and communicate.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {experiences.map((item, index) => (
          <Card
            key={index}
            variant={index === 0 ? "elevated" : "default"}
            className="p-6 sm:p-8"
          >
            <CardHeader className="p-0 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono uppercase tracking-[0.15em] text-[#525252] mb-2">
                <span>[ PROFESSIONAL ROLE // 0{index + 1} ]</span>
                <span className="font-bold text-[#0A0A0A]">{item.period}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <CardTitle className="text-2xl sm:text-3xl text-[#0A0A0A]">
                  {item.role}
                </CardTitle>
                <span className="font-mono text-sm font-semibold uppercase tracking-[0.08em] text-[#EF4444]">
                  {item.company}
                </span>
              </div>
              <CardDescription className="mt-3 text-base leading-relaxed text-[#525252]">
                {item.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 flex flex-col gap-6">
              <div>
                <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#525252] mb-3">
                  Key Focus Areas & Impact
                </h4>
                <ul className="grid gap-2.5 sm:grid-cols-1">
                  {item.focusAreas.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-6 text-[#0A0A0A]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#EF4444]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#E5E5E5] pt-5">
                <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#525252] mb-3">
                  Core Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center border-2 border-[#D4D4D4] bg-transparent px-3 py-1 font-sans text-[12px] font-bold uppercase tracking-[0.04em] text-[#525252] transition-colors hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] cursor-default select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
