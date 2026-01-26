export type LessonNote = {
  line: number;
  text: string;
};

export type Lesson = {
  id: string;
  title: string;
  goal: string;
  code: string[];
  notes: LessonNote[];
  demo: "jsx" | "props" | "state" | "list" | "effect";
};

export const lessons: Lesson[] = [
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

export const chips = ["JSX", "Props", "State", "Lists", "Effects", "Events"];
export const toolOptions = ["Next.js", "Vite", "Remix", "Astro", "Gatsby"];
