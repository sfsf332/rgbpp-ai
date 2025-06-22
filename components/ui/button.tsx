import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50"

const buttonVariants = cva(baseStyles, {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      destructive: "bg-destructive text-white",
      outline: "border bg-background text-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      ghost: "text-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      gradient: "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0",
      glass: "bg-white/5 backdrop-blur-xl border-white/10 text-white",
      success: "bg-green-500 text-white",
      warning: "bg-yellow-500 text-black",
      info: "bg-blue-500 text-white",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 px-3 text-xs",
      lg: "h-10 px-6",
      xl: "h-12 px-8 text-base",
      icon: "size-9 p-2",
    },
    effect: {
      none: "",
      scale: "hover:scale-105",
      glow: "hover:shadow-lg hover:shadow-primary/20",
      glass: "backdrop-blur-xl bg-white/5",
      gradient: "bg-gradient-to-r from-blue-600 to-purple-600",
    },
  },
  compoundVariants: [
    {
      variant: ["default", "destructive", "outline", "secondary", "success", "warning", "info"],
      effect: "glow",
      className: "shadow-sm",
    },
    {
      variant: ["gradient", "glass"],
      effect: "scale",
      className: "transform transition-transform duration-300",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "default",
    effect: "none",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, effect, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, effect, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
