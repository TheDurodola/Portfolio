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
    role: "Full-Stack Software Engineer",
    field: "Full-Stack Engineering & System Architecture",
    company: "Independent Contractor",
    period: "2026 - Present",
    description:
      "Designed and delivered custom full-stack applications, specializing in secure payment workflows, automated data ingestion pipelines, and comprehensive administration portals.",
    focusAreas: [
      "Engineered a scalable event registration platform using Gin-Gonic and Supabase, implementing idempotent webhooks for Paystack to ensure secure, duplicate-free payment processing and automated pass issuance.",
      "Developed a comprehensive ePortal system for God's Vision School using Next.js and TypeScript, streamlining administrative workflows such as tuition fee processing, grade uploads, and student result verification.",
      "Architected a bulk account creation service capable of ingesting and parsing Excel spreadsheets, adapting system workflows to match existing client habits and significantly reducing onboarding friction.",
    ],
    technologies: [
      "Golang",
      "Gin-Gonic",
      "TypeScript",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Paystack API",
      "Webhooks",
      "Data Ingestion",
    ],
  },
  {
    role: "Software Engineer",
    field: "Backend & Distributed Systems",
    company: "Semicolon Africa",
    period: "2025 - 2026",
    description:
      "Engineered scalable microservices and high-performance RESTful APIs, optimizing containerized deployment pipelines and integrating secure third-party financial gateways.",
    focusAreas: [
      "Architected and deployed microservices using Spring Boot and Docker, improving system scalability and reducing deployment time by 90%.",
      "Engineered high-performance RESTful APIs, integrating Redis caching to optimize response times and the Paystack gateway for secure, real-time payment processing.",
      "Maintained high system reliability by resolving critical production bugs within 24-hour SLAs, leveraging rigorous root-cause analysis and unit testing.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Redis",
      "PostgreSQL",
      "Microservices",
      "Docker",
      "RESTful APIs",
      "Paystack API",
      "CI/CD",
    ],
  },
  {
    role: "IT Support Specialist",
    field: "IT Infrastructure & Operations",
    company: "CrownCrystal Technologies",
    period: "2023 - 2024",
    description:
      "Administered enterprise IT infrastructure, deployed server hardware, and managed web operations to ensure high availability and reliability for corporate clients.",
    focusAreas: [
      "Configured a variety of devices for organizations including AlphaBeta Consulting and FBNQuest Merchant Bank.",
      "Troubleshot and provisioned enterprise HPE and Dell PowerEdge servers for Jubilee Life Mortgage Bank.",
      "Managed technical maintenance for the corporate website, executing SEO optimizations, data management, and bug resolution.",
    ],
    technologies: [
      "WordPress",
      "PHP",
      "Windows Server",
      "RAID Architecture",
      "HPE Servers",
      "Dell PowerEdge",
      "SEO Optimization",
      "Hardware Troubleshooting",
    ],
  },
  {
    role: "Software Engineer Intern",
    field: "Backend Engineering & System Architecture",
    company: "Semicolon Africa",
    period: "2021 - 2021",
    description:
      "Contributed to backend system design by implementing Clean Architecture principles, modeling relational databases, and collaborating on full-stack feature delivery.",
    focusAreas: [
      "Implemented a backend service refactor utilizing Clean Architecture principles to decouple core business logic from external frameworks.",
      "Designed relational data models and Entity-Relationship Diagrams (ERDs), enforcing strict data integrity and efficient querying in PostgreSQL.",
      "Collaborated cross-functionally with UI/UX teams to develop responsive, user-centric frontend interfaces.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Clean Architecture",
      "System Design",
      "UML",
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
