import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="mb-8 border-b-2 border-[#0A0A0A] pb-4">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#525252]">
          <span className="h-2 w-2 bg-[#EF4444]" />
          <span>SECTION // 05</span>
        </div>
        <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-normal tracking-[-0.02em] text-[#0A0A0A]">
          CONTACT ME
        </h2>
        <p className="mt-2 max-w-2xl font-sans text-base leading-7 text-[#525252]">
          Send a message if you need backend engineering support, cloud help,
          or a reliable problem solver.
        </p>
      </div>

      <Card variant="strong" className="bg-[#FAFAFA] p-6 sm:p-10">
        <CardContent className="p-0">
          <form
            className="grid gap-6"
            action="mailto:hello@example.com"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col">
                <span className="mb-1.5 font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-[#0A0A0A]">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="h-[44px] border-2 border-[#D4D4D4] bg-[#FAFAFA] px-3.5 font-sans text-sm text-[#0A0A0A] outline-none transition-all placeholder:text-[#A3A3A3] focus:border-[#0A0A0A] focus:shadow-[0_0_0_2px_#FAFAFA,0_0_0_4px_#0A0A0A]"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-1.5 font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-[#0A0A0A]">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="h-[44px] border-2 border-[#D4D4D4] bg-[#FAFAFA] px-3.5 font-sans text-sm text-[#0A0A0A] outline-none transition-all placeholder:text-[#A3A3A3] focus:border-[#0A0A0A] focus:shadow-[0_0_0_2px_#FAFAFA,0_0_0_4px_#0A0A0A]"
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="mb-1.5 font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-[#0A0A0A]">
                Message
              </span>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about the project, role, or problem you want help with."
                required
                className="border-2 border-[#D4D4D4] bg-[#FAFAFA] p-3.5 font-sans text-sm text-[#0A0A0A] outline-none transition-all placeholder:text-[#A3A3A3] focus:border-[#0A0A0A] focus:shadow-[0_0_0_2px_#FAFAFA,0_0_0_4px_#0A0A0A]"
              />
              <span className="mt-1.5 font-sans text-[12px] text-[#525252]">
                Direct inbox dispatch. Response typically within 24–48 hours.
              </span>
            </label>

            <div className="flex justify-center pt-2">
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full sm:w-auto"
              >
                Send message
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
