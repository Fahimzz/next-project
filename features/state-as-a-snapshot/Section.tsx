import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function Section({ title, description, children }: SectionProps) {
  return (
    <section
      style={{
        padding: "16px",
        border: "1px solid #e5e7eb",
        borderRadius: 10,
        background: "#000000",
        display: "grid",
        gap: 12,
      }}
    >
      <header style={{ display: "grid", gap: 4 }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>{title}</h2>
        {description && (
          <p style={{ margin: 0, color: "#6b7280", fontSize: 14 }}>
            {description}
          </p>
        )}
      </header>
      <div>{children}</div>
    </section>
  );
}
