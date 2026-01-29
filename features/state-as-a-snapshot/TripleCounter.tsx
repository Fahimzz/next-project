import { useState } from "react";
import DemoButton from "./DemoButton";

export default function TripleCounter() {
  const [number, setNumber] = useState(0);

  function handleTriple() {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  }

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ fontSize: 24, fontWeight: 700 }}>{number}</div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <DemoButton onClick={() => setNumber(number + 1)}>+1</DemoButton>
        <DemoButton
          onClick={handleTriple}
          style={{ background: "#0f766e", borderColor: "#0f766e" }}
        >
          +3 (same snapshot)
        </DemoButton>
        <DemoButton
          onClick={() => setNumber(0)}
          style={{ background: "#ffffff", color: "#111827" }}
        >
          Reset
        </DemoButton>
      </div>
      <p style={{ margin: 0, color: "#6b7280", fontSize: 13 }}>
        Each click reads the same render snapshot, so the +3 button still adds
        just 1.
      </p>
    </div>
  );
}
