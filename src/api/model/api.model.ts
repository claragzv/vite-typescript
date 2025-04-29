interface CharacterResponse {
  info: {
    // Tipos de unión
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

interface Character {
  // Tipos de unión
  id: number;
  name: string;
  // Tipos literales
  status: "Alive" | "Dead";
  species: "Human" | "Alien";
}

export type { CharacterResponse, Character };
