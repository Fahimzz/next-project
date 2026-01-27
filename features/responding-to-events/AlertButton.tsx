import type { ReactNode } from "react";
import DemoButton from "./DemoButton";

type AlertButtonProps = {
  message: string;
  children: ReactNode;
};

export default function AlertButton({ message, children }: AlertButtonProps) {
  return <DemoButton onClick={() => alert(message)}>{children}</DemoButton>;
}
