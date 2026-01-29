import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section style={{ padding: "16px", border: "1px solid #e5e7eb" }}>
      <h2 style={{ margin: "0 0 8px 0" }}>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
