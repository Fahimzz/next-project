"use client";

import Counter from "./Counter";
import Gallery from "./Gallery";
import Section from "./Section";
import StateIsolation from "./StateIsolation";

export default function StateMemoryPage() {
  return (
    <div
      style={{
        maxWidth: 500,
      }}
    >
      <header>
        <h1 style={{ margin: "0 0 8px 0" }}>
          State: A Component's Memory
        </h1>
      </header>

      <Section title="1) Add state to a component">
        <Counter label="Clicks" />
      </Section>

      <Section title="2) Multiple state variables">
        <Gallery />
      </Section>

      <Section title="3) State is isolated and private">
        <StateIsolation />
      </Section>
    </div>
  );
}
