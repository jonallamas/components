export type Color = "primary" | "secondary" | "error";
export type Variant = "filled" | "bezeled" | "bezeledGray" | "borderless";
export type Size = "small" | "normal";

export interface BaseButtonProps {
  $background?: string;
  $color?: string;
  $isSmall?: boolean;
}
