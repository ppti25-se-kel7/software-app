import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export interface ButtonProps
  extends Pick<
    MuiButtonProps,
    | "children"
    | "onClick"
    | "type"
    | "disabled"
    | "fullWidth"
    | "startIcon"
    | "endIcon"
    | "loading"
    | "sx"
  > {
  /** Visual style. Matches the Figma button variants. */
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error";
  size?: "small" | "medium" | "large";
}
