import { ListQueryParams } from "@/types/query";
import { queryOptions } from "@tanstack/react-query";
import qs from "qs";
import { Pokemon, PokemonListResponse } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  getPokemon: async (
    queryParams: ListQueryParams,
  ): Promise<PokemonListResponse> => {
    const queryString = qs.stringify(queryParams);
    const url = `${API_URL}/api/v1/pokemon?${queryString}`;

    const res = await fetch(url);

    // TODO: Error handling

    if (!res.ok) throw new Error("Something happened!");

    return res.json();
  },
};

export const pokemonQueries = {
  all: () => ["pokemon"] as const,
  lists: () => [...pokemonQueries.all(), "list"] as const,
  list: (queryParams: ListQueryParams) =>
    queryOptions({
      queryKey: [...pokemonQueries.lists(), { ...queryParams }] as const,
      queryFn: () => api.getPokemon(queryParams),
      staleTime: 1 * 60 * 1000,
    }),
};
