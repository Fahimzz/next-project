type CodeBlockProps = {
  lines: string[];
};

export default function CodeBlock({ lines }: CodeBlockProps) {
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
