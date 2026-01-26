import ProfileImage from "../../components/shared/profile-image";
import CodeBlock from "./components/code-block";
import Demo from "./components/demo";
import LineNotes from "./components/line-notes";
import { chips, lessons } from "./data/lessons";

export default function LearnLabPage() {
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

        <div>
          <ProfileImage />
        </div>
      </div>
    </div>
  );
}
