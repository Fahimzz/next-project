import type { MouseEventHandler, ReactNode } from "react";
import Button from "../../components/ToolBar/button";

type DemoButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
};

export default function DemoButton({
  onClick,
  children,
  type = "button",
}: DemoButtonProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      style={{
        padding: "8px 12px",
        borderRadius: 6,
        border: "1px solid #111827",
        background: "#000000",
        cursor: "pointer",
      }}
    >
      {children}
    </Button>
  );
}
