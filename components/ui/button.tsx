import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-sans font-bold uppercase tracking-[0.06em] whitespace-nowrap transition-colors select-none rounded-none outline-none focus-visible:shadow-[0_0_0_2px_#FAFAFA,0_0_0_4px_#0A0A0A] disabled:opacity-35 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[#0A0A0A] text-[#FAFAFA] border-2 border-[#0A0A0A] hover:bg-[#EF4444] hover:border-[#EF4444] hover:text-[#FAFAFA] active:bg-[#DC2626] active:border-[#DC2626]",
        outline:
          "bg-transparent text-[#0A0A0A] border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] active:bg-[#262626]",
        secondary:
          "bg-transparent text-[#0A0A0A] border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] active:bg-[#262626]",
        ghost:
          "bg-transparent text-[#0A0A0A] border-none hover:text-[#EF4444] active:text-[#DC2626]",
        destructive:
          "bg-[#EF4444] text-[#FAFAFA] border-2 border-[#EF4444] hover:bg-[#DC2626] hover:border-[#DC2626] active:bg-[#B91C1C] active:border-[#B91C1C]",
        link:
          "text-[#0A0A0A] underline-offset-4 hover:underline hover:text-[#EF4444] border-none p-0 h-auto",
      },
      size: {
        default: "h-auto px-6 py-2.5 text-[14px]",
        sm: "h-auto px-4 py-1.5 text-[12px]",
        lg: "h-auto px-8 py-3.5 text-[16px]",
        icon: "size-10 p-0 border-2 border-[#0A0A0A] bg-transparent hover:bg-[#0A0A0A] hover:text-[#FAFAFA]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
