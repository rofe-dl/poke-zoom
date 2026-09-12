export interface Pokemon {
  id: number;
  name: string;
  official_artwork: string;
  primary_type: string;
  secondary_type?: string | null;
}

export interface PokemonListResponse {
  data: Pokemon[];
  total_count: number;
}
