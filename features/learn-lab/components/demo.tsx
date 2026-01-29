"use client";

import { useEffect, useMemo, useState } from "react";
import { toolOptions } from "../data/lessons";

type DemoProps = {
  kind: "jsx" | "props" | "state" | "list" | "effect";
};

function JsxDemo() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-white/80 p-4 text-slate-900">
      <h4 className="font-[var(--font-display)] text-lg">Hello, React!</h4>
      <p className="mt-2 text-sm text-slate-600">
        This heading is returned from a component function.
      </p>
    </div>
  );
}

function PropsDemo() {
  const labels = ["New", "Trending", "Beginner"];

  return (
    <div className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <span
          key={label}
          className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function StateDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-3">
      <button
        className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        onClick={() => setCount((value) => value + 1)}
        type="button"
      >
        Increase
      </button>
      <span className="text-sm text-slate-700">Current: {count}</span>
    </div>
  );
}

function ListDemo() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    return toolOptions.filter((tool) =>
      tool.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="space-y-3">
      <input
        className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm shadow-sm focus:border-slate-900 focus:outline-none"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Filter tools..."
      />
      <ul className="grid gap-2 sm:grid-cols-2">
        {filtered.map((tool) => (
          <li
            key={tool}
            className="rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-sm text-slate-700"
          >
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EffectDemo() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-2xl border border-amber-500/30 bg-amber-50 p-4">
      <div className="text-xs uppercase tracking-[0.35em] text-amber-700">
        Live Clock
      </div>
      <div className="mt-2 font-[var(--font-display)] text-2xl text-amber-900">
        {time ? time.toLocaleTimeString() : "--:--:--"}
      </div>
    </div>
  );
}

export default function Demo({ kind }: DemoProps) {
  switch (kind) {
    case "jsx":
      return <JsxDemo />;
    case "props":
      return <PropsDemo />;
    case "state":
      return <StateDemo />;
    case "list":
      return <ListDemo />;
    case "effect":
      return <EffectDemo />;
    default:
      return null;
  }
}
