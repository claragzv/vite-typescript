import { fetchCharacters } from "../api/api";
import { Character } from "../api/model/api.model";

let charactersCache: Character[] | null = null;

async function displayCharacters(container: HTMLElement) {
  const characters: Character[] = await fetchCharacters();

  if (charactersCache == null) {
    charactersCache = [];
  }

  for (let i = 0; i < characters.length; i++) {
    const characterNow = characters[i];
    if (charactersCache.includes(characterNow)) {
      console.log("Personaje cargados anteriormente");
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
  charactersCache = characters;
}

export { displayCharacters };
