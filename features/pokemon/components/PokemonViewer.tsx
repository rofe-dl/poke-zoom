"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { pokemonQueries } from "@/features/pokemon/api/queries";
import PokemonLoading from "./PokemonLoading";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function PokemonViewer() {
  const { data, error } = useSuspenseQuery(
    pokemonQueries.list({ limit: 10, skip: 0 }),
  );

  return (
    <div className="w-[90vw] max-w-[600px] rounded-4xl bg-secondary text-secondary-foreground shadow-2xl">
      <Carousel>
        <CarouselContent>
          {data.data.map((pokemon) => (
            <CarouselItem key={pokemon.id}>
              <div className="flex h-[60vh] max-h-[600px] min-h-[350px] flex-col items-center justify-between p-8">
                <div className="relative w-full flex-1">
                  <Image
                    src={pokemon.official_artwork}
                    alt={pokemon.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="pt-4 text-center text-xl font-medium capitalize">
                  {pokemon.name}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-3 z-10" />
        <CarouselNext className="right-3 z-10" />
      </Carousel>
    </div>
  );
}
