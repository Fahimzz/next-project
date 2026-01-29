import { useRef, useState } from "react";
import DemoButton from "./DemoButton";

type Delivery = {
  id: number;
  to: string;
  message: string;
  deliveredAt: string;
};

const contacts = ["Alice", "Bob", "Taylor"];

export default function DelayedMessageForm() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello!");
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const snapshotTo = to;
    const snapshotMessage = message;
    timeoutRef.current = setTimeout(() => {
      setDeliveries((prev) => [
        {
          id: Date.now(),
          to: snapshotTo,
          message: snapshotMessage,
          deliveredAt: new Date().toLocaleTimeString(),
        },
        ...prev,
      ]);
    }, 3000);
  }

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>To</span>
          <select
            value={to}
            onChange={(event) => setTo(event.target.value)}
            style={{
              padding: "8px 10px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              fontSize: 14,
            }}
          >
            {contacts.map((contact) => (
              <option key={contact} value={contact}>
                {contact}
              </option>
            ))}
          </select>
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Message</span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            style={{
              minHeight: 80,
              padding: 10,
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              fontSize: 14,
              resize: "vertical",
            }}
          />
        </label>

        <DemoButton type="submit" style={{ background: "#0f766e" }}>
          Send after 3 seconds
        </DemoButton>
      </form>

      <div
        style={{
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid #e5e7eb",
          background: "#f8fafc",
          fontSize: 13,
          color: "#334155",
        }}
      >
        Change the recipient or message while waiting. The delivery keeps the
        snapshot from the time you clicked Send.
      </div>

      {deliveries.length > 0 && (
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ fontSize: 13, textTransform: "uppercase", color: "#94a3b8", letterSpacing: "0.2em" }}>
            Deliveries
          </div>
          <ul style={{ display: "grid", gap: 8, margin: 0, padding: 0, listStyle: "none" }}>
            {deliveries.map((delivery) => (
              <li
                key={delivery.id}
                style={{
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid #e2e8f0",
                  background: "#ffffff",
                }}
              >
                <div style={{ fontWeight: 600 }}>
                  {delivery.to}
                </div>
                <div style={{ color: "#475569", fontSize: 13 }}>
                  {delivery.message}
                </div>
                <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 4 }}>
                  Delivered at {delivery.deliveredAt}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
