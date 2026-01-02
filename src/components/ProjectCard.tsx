"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import type { Project } from "@/content/projects";

export default function ProjectCard({ p }: { p: Project }) {
  const fit = p.imageFit ?? "cover";
  const pos = p.imagePosition ?? "top";

  const imgClass =
    fit === "contain"
      ? "object-contain p-3"
      : pos === "top"
      ? "object-cover object-top"
      : "object-cover object-center";

  const rowRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);

  const drag = useRef({
    active: false,
    pointerId: 0,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = rowRef.current;
    if (!el) return;

    drag.current.active = true;
    drag.current.pointerId = e.pointerId;
    drag.current.startX = e.clientX;
    drag.current.startScrollLeft = el.scrollLeft;
    drag.current.moved = false;

    setDragging(true);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = rowRef.current;
    if (!el || !drag.current.active) return;

    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;

    el.scrollLeft = drag.current.startScrollLeft - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = rowRef.current;
    if (!el) return;

    if (drag.current.active) {
      try {
        el.releasePointerCapture(drag.current.pointerId);
      } catch {}
    }

    drag.current.active = false;
    setDragging(false);
  };

  // Evita clicks accidentales mientras arrastras
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  const cursorClass = useMemo(
    () => (dragging ? "cursor-grabbing" : "cursor-grab"),
    [dragging]
  );

  return (
    <article className="card p-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white leading-snug">
            {p.title}
          </h3>
          <p className="mt-1 text-sm text-white/70">{p.summary}</p>
        </div>

        <div className="shrink-0 flex flex-col items-end gap-2">
          <span className="text-xs text-white/55 border border-white/10 bg-black/20 px-2 py-1 rounded-full">
            {p.year}
          </span>
        </div>
      </div>

      {/* Gallery (drag to scroll) */}
      <div className="mt-4">
        <div
          ref={rowRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
          className={`flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide touch-pan-x overscroll-x-contain select-none ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {p.images.map((src, i) => (
            <div
              key={`${p.slug}-img-${i}`}
              className="relative snap-start shrink-0 w-[220px] md:w-[240px] aspect-[3/4]
                         overflow-hidden rounded-2xl border border-white/10 bg-black/35"
              draggable={false}
            >
              <Image
                src={src}
                alt={`${p.title} ${i + 1}`}
                fill
                className={imgClass}
                sizes="240px"
                priority={i === 0}
                draggable={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="mt-4 space-y-3">
        <p className="text-sm text-white/70 leading-relaxed max-h-[4.2rem] overflow-hidden">
          {p.description}
        </p>

        {/* Stack (compact) */}
        <div className="flex flex-wrap gap-2">
          {p.stack.slice(0, 8).map((x) => (
            <span key={x} className="chip text-xs">
              {x}
            </span>
          ))}
        </div>

        {/* Highlights (short) */}
        <ul className="space-y-2 text-sm text-white/70">
          {p.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[rgba(57,255,182,.75)] shadow-[0_0_12px_rgba(57,255,182,.35)]" />
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>

        {/* Links */}
        {(p.links.repo || p.links.repoFront || p.links.repoBack) && (
          <div className="pt-1 flex flex-wrap gap-2">
            {p.links.repo && (
              <a className="btn btn-solid" href={p.links.repo} target="_blank" rel="noreferrer">
                Mono-Repo
              </a>
            )}
            {p.links.repoFront && (
              <a className="btn btn-solid" href={p.links.repoFront} target="_blank" rel="noreferrer">
                Repo Front
              </a>
            )}
            {p.links.repoBack && (
              <a className="btn btn-ghost" href={p.links.repoBack} target="_blank" rel="noreferrer">
                Repo Back
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
