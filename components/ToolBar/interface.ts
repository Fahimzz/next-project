import type {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
} from "react";

interface ToolBarProps {
  onPlayMovie: () => void;
  onUploadImage: () => void;
}
interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset";
}
export type { ToolBarProps, ButtonProps };
