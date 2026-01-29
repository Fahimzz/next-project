import Counter from "./Counter";

export default function StateIsolation() {
  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <Counter label="Counter A" />
      <Counter label="Counter B" />
    </div>
  );
}
