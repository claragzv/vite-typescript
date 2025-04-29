import { fetchCharacters } from "../api/api";
import { Character } from "../api/model/api.model";

async function displayCharacters(container: HTMLElement) {
  const characters: Character[] = await fetchCharacters();

  characters.forEach((character: Character) => {
    const characterElement = document.createElement("div");
    characterElement.classList.add("character-card-container");
    characterElement.innerHTML = `
      <h2>${character.name}</h2>
      <p>${character.species}</p>
      <p>${character.status}</p>
      `;
    container.appendChild(characterElement);
  });
}
