import { useState } from "react";
import DemoButton from "./DemoButton";

type CounterProps = {
  label: string;
};

export default function Counter({ label }: CounterProps) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div>
        {label}: {count}
      </div>
      <DemoButton onClick={() => setCount(count + 1)}>
        Increment
      </DemoButton>
    </div>
  );
}
