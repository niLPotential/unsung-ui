import * as React from "react";
import { ark } from "@ark-ui/react/factory";
import { cva, type VariantProps } from "class-variant-authority";

const buttonVariants = cva("base", {
  variants: {
    variant: {
      solid: "solid",
      subtle: "subtle",
      outline: "outline",
      ghost: "ghost",
      link: "link",
    },
    size: {
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
      "2xl": "2xl",
    },
  },
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
VariandProps<typeof buttonVariants>{
    loading?: boolean,
  loadingText?: React.ReactNode,
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { loading, disabled, loadingText, children, ...rest } = props;
  const trulyDisabled = loading || disabled;
  <ark.button disabled={trulyDisabled} ref={ref} {...rest}>
     {loading && !loadingText ? (
        <>
          <ButtonSpinner />
          <styled.span opacity={0}>{children}</styled.span>
        </>
      ) : loadingText ? (
        loadingText
      ) : (
        children
      )}
  </ark.button>
})
Button.displayName = "Button";

const ButtonSpinner = () => <></>
