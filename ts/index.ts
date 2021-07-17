import { IContact } from "./models/IContact";
import { IProyect } from "./models/IProyect";
import { IService } from "./models/IService";
import { ISkill } from "./models/ISkill";

function main() {
	insertHabilidades();
	insertServicios();
	//insertProyectos();
	insertContactos();
}
function insertHabilidades() {
	const galery = document.querySelector(".skills") as HTMLElement;

	const conexion = getData(
		"https://xojeportfolio-backend.herokuapp.com/skills"
	);
	conexion.then((habilidades: ISkill[]) => {
		galery.innerHTML = "";
		habilidades.forEach((habilidad: ISkill) => {
			galery.innerHTML += `<div class="skills__item">
				<i class="${habilidad.logo}"></i><span class="skills_itemNombre">${habilidad.nombre}</span>
			  </div>`;
		});
	});
}
function insertServicios() {
	const galery = document.querySelector(".servicios") as HTMLElement;
	const conexion = getData(
		"https://xojeportfolio-backend.herokuapp.com/services"
	);
	conexion.then((servicios: IService[]) => {
		galery.innerHTML = "";
		servicios.forEach(
			(servicio: IService) =>
				(galery.innerHTML += `<div class="servicios__item">
      <i class="${servicio.logo}"></i>
      <h4 class="servicios__itemNombre">${servicio.nombre}</h4>
      <p>${servicio.descripcion}</p>
      </div>`)
		);
	});
}
function insertProyectos() {
	const galery = document.querySelector(".portfolio") as HTMLElement;
	const conexion = getData("../db/proyect.json");
	conexion.then((proyectos: IProyect[]) => {
		galery.innerHTML = "";
		proyectos.forEach((proyecto: IProyect) => {
			const item = document.createElement("div");
			item.innerHTML = `<div class="portfolio__item">
      <h3>${proyecto.titulo}</h3>
      <ul>
        <li>${proyecto.tecnologias[0]}</li>
        <li>${proyecto.tecnologias[1]}</li>
        <li>${proyecto.tecnologias[2]}</li>
      </ul>
      <p>${proyecto.descripcion}</p>
      </div>`;
			item.style.backgroundImage = `url("${proyecto.imagen}")`;
			console.log(item);
			galery.innerHTML += item.innerHTML;
		});
	});
}
function insertContactos() {
	const galery = document.querySelector(".contacto") as HTMLElement;

	const conexion = getData(
		"https://xojeportfolio-backend.herokuapp.com/contacts"
	);
	conexion.then((contactos: IContact[]) => {
		galery.innerHTML = "";
		contactos.forEach(
			(contacto: IContact) =>
				(galery.innerHTML += `<div class="contacto__item">
        <a href="${contacto.contact}" target="_blank">
          <i class="${contacto.logo}"></i>
          <span class="contacto__itemNombre">${contacto.nombre}</span>
        </a>
      </div>`)
		);
	});
}
async function getData(ruta: string) {
	const data = await fetch(ruta);
	return data.json();
}

main();
