"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Landing from "./Landing";
import PokemonViewer from "./PokemonViewer";

export default function PokeGame() {
  const searchParams = useSearchParams();
  const startedViaUrl = searchParams.get("play") === "1";
  const [startedViaClick, setStartedViaClick] = useState(false);
  const started = startedViaUrl || startedViaClick;

  if (!started) {
    return <Landing onPlay={() => setStartedViaClick(true)} />;
  }

  return <PokemonViewer />;
}
