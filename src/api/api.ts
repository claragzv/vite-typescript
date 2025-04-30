import { CharacterResponse } from "./model/api.model";

// Una web API es herramientas del navegador que permiten a los desarrolladores interactuar con el navegador y realizar tareas asíncronas como manipular el DOM, manejar eventos, realizar solicitudes HTTP, etc.
async function fetchCharacters(): Promise<CharacterResponse> {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const content: CharacterResponse = await response.json();

  return content;
}

export { fetchCharacters };
// fetch toma como parametro una url y hace una peticion get a esa url
// devuelve una promesa, es un tipo de objeto que nos permite esperar a que un proceso asincrono se complete
// yo creo una promesa, lanzo una tarea asincrona y cuando esa tarea se completa, la promesa se resuelve con el resultado de esa tarea
// js le dice al navegador que haga una peticion a la url y el navegador le responde con un objeto de respuesta
// la tarea que va a programar es devolver el resultado de la llamada http cuando esa tarea se complete
// a las promesas las podemos esperar con la palabra reservada await

// una promesa es un objeto que se instancia (new Promise(() => {}))
// y que toma como parametro un callback, una funcion a la que
// se le llama posteriormente, se le pasa una funcion resolve.
// dentro de la promesa se ejecuta la tarea asincrona y cuando se completa
// se llama a la funcion resolve con el resultado de la tarea asincrona
// dentro de la promesa puedo definir un temporizador de x segundos y
// cuando se complete el temporizador, se completa la tarea asincrona

// new Promise((resolve) => {
//  setTimeout(() => {
//    resolve("Resuelto despues de 2 segundos");
//  }, 2000);
//});

// ¿Para qué sirven las promesas?
// Para esperar datos sin bloquear el resto del código.
// Para trabajar con peticiones a servidores (como fetch).
// Para tareas que llevan tiempo, como:
//   - Leer archivos
//   - Esperar a que termine una animación
//   - Acceder a la cámara o el micrófono
//   - Esperar cierto tiempo (como con setTimeout)
