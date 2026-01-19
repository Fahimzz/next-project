"use client";

import { useEffect, useMemo, useState } from "react";

const lessons = [
  {
    id: "jsx",
    title: "JSX + Components",
    goal: "UI is just functions that return markup.",
    code: [
      "function Greeting() {",
      "  return <h1>Hello, React!</h1>;",
      "}",
      "",
      "export default function App() {",
      "  return <Greeting />;",
      "}",
    ],
    notes: [
      { line: 1, text: "Define a component as a normal JavaScript function." },
      { line: 2, text: "Return JSX (HTML-like syntax) to describe the UI." },
      { line: 5, text: "A component can render other components." },
    ],
    demo: "jsx",
  },
  {
    id: "props",
    title: "Props",
    goal: "Props pass data into components like function arguments.",
    code: [
      "function Badge({ label }) {",
      "  return <span>{label}</span>;",
      "}",
      "",
      "<Badge label=\"New\" />",
    ],
    notes: [
      { line: 1, text: "Props are destructured from the component arguments." },
      { line: 2, text: "Use curly braces to embed values inside JSX." },
      { line: 5, text: "Provide props where you render the component." },
    ],
    demo: "props",
  },
  {
    id: "state",
    title: "State",
    goal: "State lets components remember values across renders.",
    code: [
      "const [count, setCount] = useState(0);",
      "",
      "<button onClick={() => setCount(count + 1)}>",
      "  Count: {count}",
      "</button>",
    ],
    notes: [
      { line: 1, text: "useState returns the value and a setter function." },
      { line: 3, text: "Update state in response to events like clicks." },
      { line: 4, text: "Re-render shows the latest state value." },
    ],
    demo: "state",
  },
  {
    id: "list",
    title: "Lists + Keys",
    goal: "Render arrays with map and give each item a key.",
    code: [
      "const tools = ['Next.js', 'Vite', 'Remix'];",
      "",
      "<ul>",
      "  {tools.map((tool) => (",
      "    <li key={tool}>{tool}</li>",
      "  ))}",
      "</ul>",
    ],
    notes: [
      { line: 1, text: "Store list data in an array." },
      { line: 4, text: "map turns data into UI elements." },
      { line: 5, text: "Keys help React track each list item." },
    ],
    demo: "list",
  },
  {
    id: "effect",
    title: "Effects",
    goal: "useEffect runs code after render for side effects.",
    code: [
      "useEffect(() => {",
      "  const id = setInterval(tick, 1000);",
      "  return () => clearInterval(id);",
      "}, []);",
    ],
    notes: [
      { line: 1, text: "Effects run after render." },
      { line: 2, text: "Start the interval as a side effect." },
      { line: 3, text: "Cleanup prevents memory leaks." },
      { line: 4, text: "Empty deps array means run once on mount." },
    ],
    demo: "effect",
  },
];

const chips = ["JSX", "Props", "State", "Lists", "Effects", "Events"];
const toolOptions = ["Next.js", "Vite", "Remix", "Astro", "Gatsby"];

function CodeBlock({ lines }: { lines: string[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/60 p-4 text-sm text-slate-100 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.9)]">
      <div className="mb-3 text-xs uppercase tracking-[0.35em] text-slate-400">
        Code
      </div>
      <pre className="overflow-x-auto">
        {lines.map((line, index) => (
          <div key={`${line}-${index}`} className="flex gap-4">
            <span className="w-6 shrink-0 text-right text-slate-500">
              {index + 1}
            </span>
            <span className="whitespace-pre text-slate-200">{line}</span>
          </div>
        ))}
      </pre>
    </div>
  );
}

function LineNotes({ notes }: { notes: { line: number; text: string }[] }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white/90 p-4 text-sm text-slate-800 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.35)]">
      <div className="mb-3 text-xs uppercase tracking-[0.35em] text-slate-500">
        Line Notes
      </div>
      <div className="space-y-2">
        {notes.map((note) => (
          <div key={`${note.line}-${note.text}`} className="flex gap-3">
            <span className="w-8 shrink-0 rounded-full bg-slate-900 text-center text-xs font-semibold text-white">
              {note.line}
            </span>
            <p className="leading-relaxed">{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

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
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-2xl border border-amber-500/30 bg-amber-50 p-4">
      <div className="text-xs uppercase tracking-[0.35em] text-amber-700">
        Live Clock
      </div>
      <div className="mt-2 font-[var(--font-display)] text-2xl text-amber-900">
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
}

function Demo({ kind }: { kind: string }) {
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

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0_55%,_#cbd5f5)] px-6 py-12 text-slate-900 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <header className="rounded-[32px] border border-white/70 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.6)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
            React Learn Lab
          </p>
          <h1 className="mt-4 max-w-3xl font-[var(--font-display)] text-4xl leading-tight text-slate-900 sm:text-5xl">
            Learn React line by line with a UI that explains every piece.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600">
            Each lesson below mirrors the ideas from react.dev/learn and pairs
            the code with line notes and a live demo.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700"
              >
                {chip}
              </span>
            ))}
          </div>
        </header>

        <section className="grid gap-10">
          {lessons.map((lesson) => (
            <article
              key={lesson.id}
              className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_25px_55px_-35px_rgba(15,23,42,0.55)] backdrop-blur"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                <div className="lg:w-2/5">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    {lesson.id}
                  </p>
                  <h2 className="mt-3 font-[var(--font-display)] text-3xl text-slate-900">
                    {lesson.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate-600">{lesson.goal}</p>
                  <div className="mt-6">
                    <div className="text-xs uppercase tracking-[0.35em] text-slate-500">
                      Try It
                    </div>
                    <div className="mt-3">
                      <Demo kind={lesson.demo} />
                    </div>
                  </div>
                </div>

                <div className="grid flex-1 gap-6 lg:grid-cols-2">
                  <CodeBlock lines={lesson.code} />
                  <LineNotes notes={lesson.notes} />
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
