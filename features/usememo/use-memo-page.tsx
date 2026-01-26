"use client";

import { useEffect, useMemo, useState } from "react";

const catalog = [
  { id: "m0", name: "Focus Notebook", price: 18, rating: 4.7, tag: "paper" },
  { id: "m1", name: "Desk Lamp", price: 42, rating: 4.4, tag: "studio" },
  { id: "m2", name: "Workflow Timer", price: 29, rating: 4.8, tag: "gear" },
  { id: "m3", name: "Cable Kit", price: 16, rating: 4.1, tag: "gear" },
  { id: "m4", name: "Soft Keyboard", price: 64, rating: 4.6, tag: "studio" },
  { id: "m5", name: "Note Cards", price: 9, rating: 4.3, tag: "paper" },
  { id: "m6", name: "Monitor Arm", price: 88, rating: 4.5, tag: "studio" },
  { id: "m7", name: "Travel Pouch", price: 22, rating: 4.2, tag: "gear" },
];

type SortKey = "rating" | "price";

type Summary = {
  items: typeof catalog;
  subtotal: number;
  tax: number;
  total: number;
  topTag: string;
};

function buildSummary(
  items: typeof catalog,
  query: string,
  minRating: number,
  sortBy: SortKey,
  taxRate: number
): Summary {
  console.log("Building summary...");
  const normalized = query.trim().toLowerCase();
  const filtered = items.filter((item) => {
    const matchesQuery =
      normalized.length === 0 || item.name.toLowerCase().includes(normalized);
    const matchesRating = item.rating >= minRating;
    return matchesQuery && matchesRating;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    return b.rating - a.rating;
  });

  const subtotal = sorted.reduce((total, item) => total + item.price, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  const topTag =
    sorted.reduce<Record<string, number>>((acc, item) => {
      acc[item.tag] = (acc[item.tag] || 0) + 1;
      return acc;
    }, {}) || {};

  const topTagName = Object.entries(topTag).sort((a, b) => b[1] - a[1])[0]?.[0];

  return {
    items: sorted,
    subtotal,
    tax,
    total,
    topTag: topTagName ?? "none",
  };
}

export default function UseMemoPage() {
  const [query, setQuery] = useState("");
  const [minRating, setMinRating] = useState(4);
  const [sortBy, setSortBy] = useState<SortKey>("rating");
  const [taxRate, setTaxRate] = useState(0.08);
  const [notes, setNotes] = useState("");
  const [memoRuns, setMemoRuns] = useState(0);

  const summary = useMemo(
    () => buildSummary(catalog, query, minRating, sortBy, taxRate),
    [query, minRating, sortBy, taxRate]
  );

  useEffect(() => {
    setMemoRuns((value) => value + 1);
  }, [summary]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fdf2e9,_#fdebd3_40%,_#f9dcc4_70%)] px-6 py-12 text-slate-900 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="rounded-[32px] border border-white/60 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.5)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
            React Hook Focus
          </p>
          <h1 className="mt-4 max-w-3xl font-[var(--font-display)] text-4xl leading-tight text-slate-900 sm:text-5xl">
            useMemo keeps expensive derived data stable between renders.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600">
            Try changing the filters and tax rate. The summary recomputes only
            when those values change, not when you type notes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-slate-600">
            <span className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1">
              Dependencies
            </span>
            <span className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1">
              Derived Values
            </span>
            <span className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1">
              Stable References
            </span>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_25px_55px_-35px_rgba(15,23,42,0.5)] backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  Filters
                </p>
                <h2 className="mt-2 font-[var(--font-display)] text-2xl text-slate-900">
                  Search the catalog
                </h2>
              </div>
              <div className="rounded-full border border-amber-500/30 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
                Memo runs: {memoRuns}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-700">
                Search query
                <input
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-sm shadow-sm focus:border-slate-900 focus:outline-none"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try typing: desk"
                />
              </label>

              <label className="text-sm text-slate-700">
                Minimum rating
                <input
                  className="mt-3 w-full accent-slate-900"
                  type="range"
                  min={3.5}
                  max={5}
                  step={0.1}
                  value={minRating}
                  onChange={(event) => setMinRating(Number(event.target.value))}
                />
                <div className="mt-1 text-xs text-slate-500">
                  {minRating.toFixed(1)} stars or higher
                </div>
              </label>

              <label className="text-sm text-slate-700">
                Sort by
                <select
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-sm shadow-sm focus:border-slate-900 focus:outline-none"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortKey)}
                >
                  <option value="rating">Top rated</option>
                  <option value="price">Lowest price</option>
                </select>
              </label>

              <label className="text-sm text-slate-700">
                Tax rate
                <input
                  className="mt-3 w-full accent-slate-900"
                  type="range"
                  min={0}
                  max={0.2}
                  step={0.01}
                  value={taxRate}
                  onChange={(event) => setTaxRate(Number(event.target.value))}
                />
                <div className="mt-1 text-xs text-slate-500">
                  {(taxRate * 100).toFixed(0)}% sales tax
                </div>
              </label>
            </div>

            <div className="mt-6">
              <label className="text-sm text-slate-700">
                Notes (does not affect useMemo)
                <textarea
                  className="mt-2 min-h-[96px] w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-sm shadow-sm focus:border-slate-900 focus:outline-none"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="Type here and watch memo runs stay the same."
                />
              </label>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[24px] border border-black/10 bg-white/90 p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.4)]">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                Derived Summary
              </p>
              <div className="mt-4 grid gap-3 text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <span>Items shown</span>
                  <span className="font-semibold text-slate-900">
                    {summary.items.length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Top tag</span>
                  <span className="font-semibold text-slate-900">
                    {summary.topTag}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    ${summary.subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tax</span>
                  <span className="font-semibold text-slate-900">
                    ${summary.tax.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-base">
                  <span>Total</span>
                  <span className="font-semibold text-slate-900">
                    ${summary.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-black/10 bg-white/90 p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.4)]">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                Filtered Items
              </p>
              <ul className="mt-4 grid gap-3">
                {summary.items.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900">
                        {item.name}
                      </span>
                      <span className="text-slate-500">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-500">
                      {item.tag} - {item.rating.toFixed(1)} stars
                    </div>
                  </li>
                ))}
              </ul>
              {summary.items.length === 0 && (
                <p className="mt-4 text-sm text-slate-500">
                  No items match the filters.
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_25px_55px_-35px_rgba(15,23,42,0.5)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            What is memoized
          </p>
          <div className="mt-4 grid gap-4 text-sm text-slate-700 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
              <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Dependencies
              </div>
              <p className="mt-2">{`[query, minRating, sortBy, taxRate]`}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
              <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Memo result
              </div>
              <p className="mt-2">
                filtered list + subtotal + tax + total + top tag
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
              <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Not included
              </div>
              <p className="mt-2">Notes field changes do not rerun useMemo.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
