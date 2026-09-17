import PokeGame from "@/features/pokemon/components/PokeGame";
import { getQueryClient } from "@/app/get-query-client";
import { pokemonQueries } from "@/features/pokemon/api/queries";
import { dehydrate, HydrationBoundary, noop } from "@tanstack/react-query";
import { Suspense } from "react";
import PokemonLoading from "@/features/pokemon/components/PokemonLoading";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient
    .query(pokemonQueries.list({ limit: 10, skip: 0 }))
    .catch(noop);

  return (
    // <div className="flex flex-col flex-1 items-center justify-center dark:bg-black"></div>
    <div className="flex flex-col flex-1 items-center justify-center">
      <Suspense fallback={<PokemonLoading />}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <PokeGame />
        </HydrationBoundary>
      </Suspense>
    </div>
  );
}
