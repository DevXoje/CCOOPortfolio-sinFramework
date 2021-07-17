var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function main() {
    insertHabilidades();
    insertServicios();
    //insertProyectos();
    insertContactos();
}
function insertHabilidades() {
    var galery = document.querySelector(".skills");
    var conexion = getData("https://xojeportfolio-backend.herokuapp.com/skills");
    conexion.then(function (habilidades) {
        galery.innerHTML = "";
        habilidades.forEach(function (habilidad) {
            galery.innerHTML += "<div class=\"skills__item\">\n\t\t\t\t<i class=\"" + habilidad.logo + "\"></i><span class=\"skills_itemNombre\">" + habilidad.nombre + "</span>\n\t\t\t  </div>";
        });
    });
}
function insertServicios() {
    var galery = document.querySelector(".servicios");
    var conexion = getData("https://xojeportfolio-backend.herokuapp.com/services");
    conexion.then(function (servicios) {
        galery.innerHTML = "";
        servicios.forEach(function (servicio) {
            return (galery.innerHTML += "<div class=\"servicios__item\">\n      <i class=\"" + servicio.logo + "\"></i>\n      <h4 class=\"servicios__itemNombre\">" + servicio.nombre + "</h4>\n      <p>" + servicio.descripcion + "</p>\n      </div>");
        });
    });
}
function insertProyectos() {
    var galery = document.querySelector(".portfolio");
    var conexion = getData("../db/proyect.json");
    conexion.then(function (proyectos) {
        galery.innerHTML = "";
        proyectos.forEach(function (proyecto) {
            var item = document.createElement("div");
            item.innerHTML = "<div class=\"portfolio__item\">\n      <h3>" + proyecto.titulo + "</h3>\n      <ul>\n        <li>" + proyecto.tecnologias[0] + "</li>\n        <li>" + proyecto.tecnologias[1] + "</li>\n        <li>" + proyecto.tecnologias[2] + "</li>\n      </ul>\n      <p>" + proyecto.descripcion + "</p>\n      </div>";
            item.style.backgroundImage = "url(\"" + proyecto.imagen + "\")";
            console.log(item);
            galery.innerHTML += item.innerHTML;
        });
    });
}
function insertContactos() {
    var galery = document.querySelector(".contacto");
    var conexion = getData("https://xojeportfolio-backend.herokuapp.com/contacts");
    conexion.then(function (contactos) {
        galery.innerHTML = "";
        contactos.forEach(function (contacto) {
            return (galery.innerHTML += "<div class=\"contacto__item\">\n        <a href=\"" + contacto.contact + "\" target=\"_blank\">\n          <i class=\"" + contacto.logo + "\"></i>\n          <span class=\"contacto__itemNombre\">" + contacto.nombre + "</span>\n        </a>\n      </div>");
        });
    });
}
function getData(ruta) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(ruta)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, data.json()];
            }
        });
    });
}
main();
export {};
