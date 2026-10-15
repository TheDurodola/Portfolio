"use client";

import { useRef } from "react";
import { Anton } from "next/font/google";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export type ScrollDirection =
  | "left-to-right"
  | "right-to-left"
  | "ltr"
  | "rtl"
  | "left"
  | "right";

export interface QuoteSectionProps {
  /** First line of the quote */
  firstLine?: string;
  /** Second line of the quote */
  secondLine?: string;
  /**
   * Overall direction preset:
   * - "default": line 1 moves left-to-right, line 2 moves right-to-left
   * - "reverse": line 1 moves right-to-left, line 2 moves left-to-right
   * - "left-to-right" | "ltr" | "left": both lines move left-to-right
   * - "right-to-left" | "rtl" | "right": both lines move right-to-left
   */
  direction?: "default" | "reverse" | ScrollDirection;
  /** Specific scroll direction for the first line */
  firstLineDirection?: ScrollDirection;
  /** Specific scroll direction for the second line */
  secondLineDirection?: ScrollDirection;
  /** Additional classes for the outer <section> element */
  className?: string;
  /** Background styling class, defaults to signature wine 'bg-[#8b1e3f]' */
  bgClassName?: string;
  /** Text color styling class, defaults to 'text-white' */
  textClassName?: string;
}

function parseDirection(
  dir: ScrollDirection | undefined,
  fallback: "left-to-right" | "right-to-left"
): "left-to-right" | "right-to-left" {
  if (!dir) return fallback;
  if (dir === "right-to-left" || dir === "rtl" || dir === "right") {
    return "right-to-left";
  }
  return "left-to-right";
}

export default function QuoteSection({
  firstLine = "YOU DESCRIBE",
  secondLine = "I ENGINEER",
  direction = "default",
  firstLineDirection,
  secondLineDirection,
  className,
  bgClassName = "bg-[#8b1e3f]",
  textClassName = "text-white",
}: QuoteSectionProps) {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Base transforms
  const xLeftToRight = useTransform(scrollYProgress, [0, 1], ["-35%", "35%"]);
  const xRightToLeft = useTransform(scrollYProgress, [0, 1], ["35%", "-35%"]);

  // Resolve direction defaults based on top-level direction preset
  let defaultFirst: "left-to-right" | "right-to-left" = "left-to-right";
  let defaultSecond: "left-to-right" | "right-to-left" = "right-to-left";

  if (direction === "reverse") {
    defaultFirst = "right-to-left";
    defaultSecond = "left-to-right";
  } else if (
    direction === "ltr" ||
    direction === "left-to-right" ||
    direction === "left"
  ) {
    defaultFirst = "left-to-right";
    defaultSecond = "left-to-right";
  } else if (
    direction === "rtl" ||
    direction === "right-to-left" ||
    direction === "right"
  ) {
    defaultFirst = "right-to-left";
    defaultSecond = "right-to-left";
  }

  const resolvedFirstDirection = parseDirection(
    firstLineDirection,
    defaultFirst
  );
  const resolvedSecondDirection = parseDirection(
    secondLineDirection,
    defaultSecond
  );

  const firstX =
    resolvedFirstDirection === "left-to-right" ? xLeftToRight : xRightToLeft;
  const secondX =
    resolvedSecondDirection === "left-to-right" ? xLeftToRight : xRightToLeft;

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative flex w-full flex-col justify-center overflow-hidden py-4 select-none sm:py-6 md:py-8",
        bgClassName,
        className
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center text-center",
          anton.className,
          textClassName
        )}
      >
        <motion.p
          style={{ x: firstX }}
          className="whitespace-nowrap text-[clamp(4.5rem,17vw,17rem)] uppercase leading-[0.85] tracking-normal"
        >
          {firstLine}
        </motion.p>
        {secondLine && (
          <motion.p
            style={{ x: secondX }}
            className="whitespace-nowrap text-[clamp(4.5rem,17vw,17rem)] uppercase leading-[0.85] tracking-normal"
          >
            {secondLine}
          </motion.p>
        )}
      </div>
    </section>
  );
}
