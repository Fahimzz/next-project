import type { LessonNote } from "../data/lessons";

type LineNotesProps = {
  notes: LessonNote[];
};

export default function LineNotes({ notes }: LineNotesProps) {
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
