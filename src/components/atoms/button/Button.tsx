import MuiButton from "@mui/material/Button";
import type { ButtonProps } from "./Button.types";

/**
 * Base button. Use this instead of importing `@mui/material/Button` in features,
 * so every button follows the same design tokens.
 */
export function Button({
  variant = "contained",
  color = "primary",
  size = "medium",
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      type={type}
      disableElevation
      {...rest}
    >
      {children}
    </MuiButton>
  );
}
