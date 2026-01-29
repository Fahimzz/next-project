import type { CSSProperties, MouseEventHandler, ReactNode } from "react";
import Button from "../../components/ToolBar/button";

type DemoButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
};

const baseStyle: CSSProperties = {
  padding: "8px 12px",
  borderRadius: 6,
  border: "1px solid #111827",
  background: "#111827",
  color: "#ffffff",
  cursor: "pointer",
  fontSize: 14,
  fontWeight: 600,
};

export default function DemoButton({
  onClick,
  children,
  type = "button",
  style,
}: DemoButtonProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      style={{ ...baseStyle, ...style }}
    >
      {children}
    </Button>
  );
}
