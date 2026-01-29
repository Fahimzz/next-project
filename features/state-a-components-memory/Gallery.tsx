import { useState } from "react";
import DemoButton from "./DemoButton";

const people = [
  {
    name: "Ada Lovelace",
    bio: "Early computing pioneer and analyst.",
  },
  {
    name: "Grace Hopper",
    bio: "Computer scientist and inventor of COBOL.",
  },
  {
    name: "Margaret Hamilton",
    bio: "Led Apollo flight software engineering.",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showBio, setShowBio] = useState(false);

  const person = people[index];

  function handleNext() {
    setIndex((prevIndex) => (prevIndex + 1) % people.length);
    setShowBio(false);
  }

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ fontWeight: 600 }}>{person.name}</div>
      {showBio ? <p style={{ margin: 0 }}>{person.bio}</p> : null}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <DemoButton onClick={() => setShowBio(!showBio)}>
          {showBio ? "Hide bio" : "Show bio"}
        </DemoButton>
        <DemoButton onClick={handleNext}>Next person</DemoButton>
      </div>
    </div>
  );
}
