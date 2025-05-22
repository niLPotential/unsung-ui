import { ark } from "@ark-ui/react/factory";
import { cva, type VariantProps } from "class-variance-authority"

const iconVariants = cva("base", {
  variants: {
    "size": {
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
      "2xl": "2xl",
    }
  }
})

export const Icon = {asChild: true, ...ark.svg}
