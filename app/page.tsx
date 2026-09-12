import PokemonViewer from "@/features/pokemon/components/PokemonViewer";
import { getQueryClient } from "@/app/get-query-client";
import { pokemonQueries } from "@/features/pokemon/api/queries";
import { dehydrate, HydrationBoundary, noop } from "@tanstack/react-query";
import { Suspense } from "react";
import PokemonLoading from "@/features/pokemon/components/PokemonLoading";

export default async function Home() {
  return (
    // <div className="flex flex-col flex-1 items-center justify-center dark:bg-black"></div>
    <div className="flex flex-col flex-1 items-center justify-center">
      <Suspense fallback={<PokemonLoading />}>
        <Pokemon />
      </Suspense>
    </div>
  );
}

export async function Pokemon() {
  const queryClient = getQueryClient();

  await queryClient
    .query(pokemonQueries.list({ limit: 10, skip: 0 }))
    .catch(noop);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PokemonViewer />
    </HydrationBoundary>
  );
}
