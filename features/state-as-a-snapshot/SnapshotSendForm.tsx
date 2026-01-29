import { useState } from "react";
import DemoButton from "./DemoButton";

export default function SnapshotSendForm() {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSent(true);
  }

  if (isSent) {
    return (
      <div style={{ display: "grid", gap: 12 }}>
        <h3 style={{ margin: 0 }}>Your message is on its way.</h3>
        <p style={{ margin: 0, color: "#6b7280" }}>
          The UI changed because the state updated.
        </p>
        <DemoButton
          onClick={() => {
            setIsSent(false);
            setMessage("");
          }}
          style={{ background: "#ffffff", color: "#111827" }}
        >
          Send another
        </DemoButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
      <label style={{ display: "grid", gap: 6 }}>
        <span style={{ fontSize: 14, fontWeight: 600 }}>Message</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write a short note..."
          style={{
            minHeight: 90,
            padding: 10,
            borderRadius: 8,
            border: "1px solid #0d0d0e",
            fontSize: 14,
            resize: "vertical",
          }}
        />
      </label>
      <DemoButton type="submit">Send</DemoButton>
    </form>
  );
}
