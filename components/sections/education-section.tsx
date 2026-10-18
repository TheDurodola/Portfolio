import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DegreeItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  description: string;
  focusAreas: string[];
  coursework: string[];
}

const degrees: DegreeItem[] = [
  {
    degree: "Bachelor of Science",
    field: "Computer Science",
    institution: "Bowen University, Iwo.",
    period: "2019 — 2023",
    description:
      "Comprehensive grounding in theoretical computer science, systems programming, data structures, algorithm design, and software architecture.",
    focusAreas: [
      "Distributed systems, concurrent computing, and client-server network architectures",
      "Database management systems, query optimization, and relational data modeling",
      "Software engineering principles, system modeling, and test-driven methodologies",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "PROGRAMMING IN LOW LEVEL LANGUAGES",
      "COMPUTER ARCHITECTURE & ORGANIZATION",
      "SYSTEMS ANALYSIS AND DESIGN",
      "OBJECT-ORIENTED PROGRAMMING IN JAVA",
      "FOUNDATIONS OF SEQUENTIAL PROGRAM",
      "DATA MANAGEMENT",
      "ALGORITHMS AND COMPLEXITY ANALYSIS",
      "PROGRAMMING WITH C#", 
      "NET-CENTRIC COMPUTING", 
      "HUMAN-COMPUTER INTERFACE", 
    ],
  },
];

const technicalStudies = [
  {
    category: "BUSINESS MANAGEMENT",
    title: "Henley Business School - Management Module",
    description:
      "Certificate in Business Management, covering core principles of business strategy, leadership, and decision-making in dynamic environments.",
    tags: [ "Entrepreneurship", "Predictive Logic", 
      "Business Strategy", "Decision Making", "Leadership", ],
  },
  {
    category: "Computer Skills Aquisition",
    title: "New Horizons Nigeria",
    description:
      "Professional credential validating core competencies in object-oriented Java development, relational database architecture via Oracle SQL, and applied machine learning fundamentals.",
    tags: ["Java", "Machine Learning", "Oracle SQL", "Excel"],
  },
];

export default function EducationSection() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="mb-8 border-b-2 border-[#0A0A0A] pb-4">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#525252]">
          <span className="h-2 w-2 bg-[#EF4444]" />
          <span>SECTION // 04</span>
        </div>
        <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-normal tracking-[-0.02em] text-[#0A0A0A]">
          EDUCATION
        </h2>
        <p className="mt-2 max-w-2xl font-sans text-base leading-7 text-[#525252]">
          Academic foundations, engineering principles, and continuous technical studies.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {degrees.map((item, index) => (
          <Card
            key={item.degree}
            variant={index === 0 ? "elevated" : "default"}
            className="p-6 sm:p-8"
          >
            <CardHeader className="p-0 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono uppercase tracking-[0.15em] text-[#525252] mb-2">
                <span>[ ACADEMIC CREDENTIAL // 0{index + 1} ]</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <CardTitle className="text-2xl sm:text-3xl text-[#0A0A0A]">
                  {item.degree} in {item.field}
                </CardTitle>
                <span className="font-mono text-sm font-semibold uppercase tracking-[0.08em] text-[#EF4444]">
                  {item.institution}
                </span>
              </div>
              <CardDescription className="mt-3 text-base leading-relaxed text-[#525252]">
                {item.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 flex flex-col gap-6">
              <div>
                <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#525252] mb-3">
                  Key Focus Areas
                </h4>
                <ul className="grid gap-2.5 sm:grid-cols-1">
                  {item.focusAreas.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-[#0A0A0A]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#EF4444]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#E5E5E5] pt-5">
                <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#525252] mb-3">
                  Core Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center border-2 border-[#D4D4D4] bg-transparent px-3 py-1 font-sans text-[12px] font-bold uppercase tracking-[0.04em] text-[#525252] transition-colors hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] cursor-default select-none"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="grid gap-6 md:grid-cols-2">
          {technicalStudies.map((study) => (
            <Card key={study.title} variant="default" className="p-6 sm:p-8 flex flex-col justify-between">
              <CardHeader className="p-0 pb-4">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.15em] text-[#525252] mb-2">
                  <span>[ CONTINUOUS STUDY ]</span>
                  <span className="font-bold text-[#0A0A0A]">{study.category}</span>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-[#0A0A0A]">
                  {study.title}
                </CardTitle>
                <CardDescription className="mt-2 text-sm leading-relaxed text-[#525252]">
                  {study.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-4 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center border border-[#D4D4D4] bg-[#FAFAFA] px-2.5 py-0.5 font-sans text-[11px] font-bold uppercase tracking-[0.04em] text-[#525252]"
                  >
                    {tag}
                  </span>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
