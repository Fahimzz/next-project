import { useRef, useState } from "react";
import DemoButton from "./DemoButton";

export default function DelayedAlertCounter() {
  const [number, setNumber] = useState(0);
  const [delayedMessage, setDelayedMessage] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleDelayedUpdate() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setNumber(number + 5);
    setDelayedMessage("Waiting for the snapshot...");

    timeoutRef.current = setTimeout(() => {
      setDelayedMessage(`Snapshot value was ${number}.`);
    }, 3000);
  }

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ fontSize: 24, fontWeight: 700 }}>{number}</div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <DemoButton onClick={() => setNumber(number + 1)}>+1</DemoButton>
        <DemoButton
          onClick={handleDelayedUpdate}
          style={{ background: "#1d4ed8", borderColor: "#1d4ed8" }}
        >
          +5 then wait 3s
        </DemoButton>
      </div>
      <p style={{ margin: 0, color: "#6b7280", fontSize: 13 }}>
        The delayed message shows the value captured in the click's snapshot.
      </p>
      <div
        style={{
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px dashed #cbd5f5",
          background: "#eff6ff",
          color: "#1e3a8a",
          fontSize: 13,
        }}
      >
        {delayedMessage ?? "No delayed message yet."}
      </div>
    </div>
  );
}
