"use client";

import { Play, ZoomIn, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Landing({ onPlay }: { onPlay: () => void }) {
  return (
    <div className="w-[90vw] max-w-[720px] rounded-4xl border border-border/60 bg-card px-8 py-14 text-center shadow-2xl sm:px-14">
      <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary px-4 py-1.5 text-xs font-medium tracking-widest text-secondary-foreground uppercase">
        <Sparkles className="size-3.5" />
        A 10-creature gauntlet
      </span>

      <h1 className="mt-8 text-5xl font-bold tracking-tight uppercase sm:text-6xl">
        Zoom in.
        <br />
        <span className="text-primary dark:text-primary">Guess &rsquo;em.</span>
        <br />
        Repeat.
      </h1>

      <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
        We cranked the zoom on ten Pok&eacute;mon until they became
        beautiful, deeply confusing smudges of fur and fin. Can you still
        name them &mdash; or will you call a Pikachu &ldquo;Pichu&rdquo;
        and live with that forever?
      </p>

      <Button
        onClick={onPlay}
        className="mt-10 h-12 gap-3 rounded-full px-8 text-sm font-bold tracking-widest uppercase"
      >
        <Play className="size-4 fill-current" />
        Start the zoom
      </Button>

      <div className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 text-xs text-muted-foreground">
        <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
          <div className="text-2xl font-bold text-foreground">10</div>
          smudges
        </div>
        <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
          <div className="text-2xl font-bold text-foreground">0</div>
          mercy
        </div>
        <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
          <div className="text-2xl font-bold text-foreground">100%</div>
          bragging rights
        </div>
      </div>

      <p className="mt-10 flex items-center justify-center gap-2 text-[0.6875rem] tracking-widest text-muted-foreground uppercase">
        <ZoomIn className="size-3.5" />
        No sign-up. Just ego damage.
      </p>
    </div>
  );
}
