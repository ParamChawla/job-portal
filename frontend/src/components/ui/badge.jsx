import * as React from "react"
import { cva } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-lg px-3 py-1 text-xs font-semibold transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
        secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
        outline: "border border-gray-300 text-gray-700 bg-white",
        success: "bg-green-100 text-green-700 hover:bg-green-200",
        warning: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }