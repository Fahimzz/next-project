"use client";

import DemoButton from "./DemoButton";
import AlertButton from "./AlertButton";
import PreventDefaultExample from "./PreventDefaultExample";
import Section from "./Section";
import StopPropagationExample from "./StopPropagationExample";
import Toolbar from "./Toolbar";

export default function RespondingToEventsPage() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <div
      style={{
        maxWidth: 720,
        margin: "40px auto",
        padding: "0 16px",
        display: "grid",
        gap: 16,
      }}
    >
      <header>
        <h1 style={{ margin: "0 0 8px 0" }}>Responding to Events</h1>
        <p style={{ margin: 0 }}>
          handler, props, composition,
          and event flow.
        </p>
      </header>

      <Section title="1) Add an event handler">
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <DemoButton onClick={handleClick}>Click me</DemoButton>
          <DemoButton onClick={() => alert("Inline handler!")}>
            Inline example
          </DemoButton>
        </div>
      </Section>

      <Section title="2) Read props inside the handler">
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <AlertButton message="Playing!">Play Movie</AlertButton>
          <AlertButton message="Uploading!">Upload Image</AlertButton>
        </div>
      </Section>

      <Section title="3) Pass handlers through components">
        <Toolbar />
      </Section>

      <Section title="4) Stop propagation">
        <StopPropagationExample />
      </Section>

      <Section title="5) Prevent default">
        <PreventDefaultExample />
      </Section>
    </div>
  );
}
