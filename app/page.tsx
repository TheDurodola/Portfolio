import ContactSection from "@/components/sections/contact-section";
import EducationSection from "@/components/sections/education-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import QuoteSection from "@/components/sections/quote-section";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import ToolsSection from "@/components/sections/tools-section";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pt-6 sm:px-10 lg:px-12">
        <SiteHeader />
        <HeroSection />
      </div>

      <QuoteSection
        firstLine="YOU DESCRIBE"
        secondLine="I ENGINEER"
        bgClassName="bg-[#790D16]"
        textClassName="text-[#F5EFE1]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pt-16 sm:px-10 lg:px-12">
        <ExperienceSection />
      </div>

      <QuoteSection
        firstLine="EVERY TASK"
        secondLine="IS A PUZZLE"
        direction="reverse"
        bgClassName="bg-[#AEC4D4]"
        textClassName="text-[#F5EFE1]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pt-16 sm:px-10 lg:px-12">
        <ProjectsSection />
      </div>

      <QuoteSection
        firstLine="CLEAN ARCHITECTURE"
        secondLine="PLAN FIRST"
        bgClassName="bg-[#790D16]"
        textClassName="text-[#F5EFE1]"
      />

      <div className="pt-16">
        <ToolsSection />
      </div>

      <QuoteSection
        firstLine="FIRST PRINCIPLES"
        secondLine="DEEP ROOTS"
        direction="reverse"
        bgClassName="bg-[#AEC4D4]"
        textClassName="text-[#F5EFE1]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pt-16 sm:px-10 lg:px-12">
        <EducationSection />
      </div>

      <QuoteSection
        firstLine="DURODOLA ABOLAJI"
        secondLine="TOLIAT"
        bgClassName="bg-[#790D16]"
        textClassName="text-[#F5EFE1]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pt-16 pb-8 sm:px-10 lg:px-12">
        <ContactSection />
        <SiteFooter />
      </div>
    </main>
  );
}
