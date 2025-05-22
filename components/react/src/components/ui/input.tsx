import { cva } from "class-variance-authority";
import { ark } from "@ark-ui/react/factory";

const inputVariants = cva("base", {
  variants: {
    size: {
      "2xs",
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl",
    },
  },
});

export const Input = ark.input
