import type { FormEvent } from "react";
import DemoButton from "./DemoButton";

export default function PreventDefaultExample() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Submitting (default prevented)!");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
    >
      <input
        name="name"
        placeholder="Type your name"
        style={{
          padding: "8px 10px",
          borderRadius: 6,
          border: "1px solid #d1d5db",
        }}
      />
      <DemoButton type="submit">Submit</DemoButton>
    </form>
  );
}
