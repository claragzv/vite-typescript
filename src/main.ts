import "./style.css";
import HeaderTemplate from "./templates/header.html?raw";
import Footer from "./templates/footer.html?raw";
import Main from "./templates/main.html?raw";
import { Character } from "./api/model/api.model";
import { displayCharacters } from "./modules/characters";

const root = document.querySelector<HTMLDivElement>("#app")!;

const header = document.createElement("div");
header.innerHTML = HeaderTemplate;
header.children;

const footer = document.createElement("div");
footer.innerHTML = Footer;

const main = document.createElement("div");
main.innerHTML = Main;

root.appendChild(header);
root.appendChild(main);
root.appendChild(footer);

const characterContent = document.createElement("div");
characterContent.classList.add("character-content");

main.appendChild(characterContent);

// H1
const h1 = document.createElement("h1");
h1.innerText = "Aplicación de Rick y Morty";

// Creo una constante que se llama button, al igual que hemos creado antes
// header, main y footer
const button = document.createElement("button");
// Le meto un texto al botón
button.innerText = "Cargar personajes";
// Le meto estilos al botón
button.classList.add("button");
// Le meto un evento al botón, que cuando se haga click en
// consola aparezca "Cargando personajes..."
button.addEventListener("click", () => {
  console.log("Cargando personajes...");
  displayCharacters(characterContent);
  console.log("Personajes cargados");
});
main.appendChild(button);
