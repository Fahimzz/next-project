import type { MouseEvent } from "react";
import DemoButton from "./DemoButton";

export default function StopPropagationExample() {
  function handleDivClick() {
    alert("You clicked the toolbar.");
  }

  function handleButtonClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    alert("You clicked the button.");
  }

  return (
    <div
      onClick={handleDivClick}
      style={{
        display: "inline-flex",
        padding: 8,
        border: "1px dashed #9ca3af",
      }}
    >
      <DemoButton onClick={handleButtonClick}>Stop propagation</DemoButton>
    </div>
  );
}
