"use client";

import DelayedAlertCounter from "./DelayedAlertCounter";
import DelayedMessageForm from "./DelayedMessageForm";
import Section from "./Section";
import SnapshotSendForm from "./SnapshotSendForm";
import TripleCounter from "./TripleCounter";

export default function StateAsSnapshotPage() {
  return (
    <div
      style={{
        maxWidth: 820,
        margin: "40px auto",
        padding: "0 16px 40px",
        display: "grid",
        gap: 16,
      }}
    >
      <header style={{ display: "grid", gap: 8 }}>
        <p style={{ margin: 0, color: "#000000", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: 12 }}>
          React Learn
        </p>
        <h1 style={{ margin: 0, fontSize: 32 }}>State as a Snapshot</h1>
        <p style={{ margin: 0, color: "#6b7280", fontSize: 15 }}>
          Each render gets a frozen view of state. These examples mirror the
          official guide and show how event handlers capture that snapshot.
        </p>
      </header>

      <Section
        title="1) State updates change what you render"
        description="Submitting sets state and the UI swaps to the sent view."
      >
        <SnapshotSendForm />
      </Section>

      <Section
        title="2) Multiple updates use the same snapshot"
        description="Click +3 and notice it only increments by 1."
      >
        <TripleCounter />
      </Section>

      <Section
        title="3) Delayed work keeps the old snapshot"
        description="Even after the UI updates, the timeout keeps the old value."
      >
        <DelayedAlertCounter />
      </Section>

      <Section
        title="4) Forms keep the snapshot from submit"
        description="Changing inputs after submitting does not affect the queued delivery."
      >
        <DelayedMessageForm />
      </Section>
    </div>
  );
}
