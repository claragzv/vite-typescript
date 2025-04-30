import { fetchCharacters } from "../api/api";
import { Character, CharacterResponse } from "../api/model/api.model";

let charactersResponseCache: CharacterResponse | null = null;

async function displayCharacters(container: HTMLElement) {
  const charactersResponse: CharacterResponse = await fetchCharacters();

  for (let i = 0; i < charactersResponse.results.length; i++) {
    const characterNow = charactersResponse.results[i];

    // Antes hemos usado el .includes pero comparar objetos con eso actua como un === y puede que sean iguales
    // por su contenido y tal pero como su posicion en memoria es diferente eso siempre va a dar false

    let cacheArray: Character[] = [];
    if (charactersResponseCache !== null) {
      cacheArray = charactersResponseCache.results;
    }

    const cacheCharacter = cacheArray.find((characterCache) => {
      if (cacheCharacter.id === characterNow.id) {
        return true;
      }
    });

    if (cacheCharacter !== undefined) {
      continue;
    }

    const characterElement = document.createElement("div");
    characterElement.classList.add("character-card-container");
    characterElement.innerHTML = `
      <h2>${characterNow.name}</h2>
      <p>Species: ${characterNow.species}</p>
      <p>Status: ${characterNow.status}</p>
      `;
    container.appendChild(characterElement);
  }
  charactersResponseCache = charactersResponse;
}

export { displayCharacters };
