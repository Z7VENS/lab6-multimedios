import { guardar, cargar } from './storage.js';
import { renderizar, actualizarContador } from './ui.js';

const input = document.getElementById("taskInput");
const botonAdd = document.getElementById("addBtn");
const listaRaiz = document.getElementById("taskList");
const contadorTxt = document.getElementById("contador");

let tareas = cargar();

const refrescarTodo = () => {
    renderizar(listaRaiz, tareas);
    actualizarContador(contadorTxt, tareas);
    guardar(tareas);
};


botonAdd.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto === "") return alert("Mi estimado tareas vacias no");

    tareas.push({ id: Date.now(), texto, completada: false });
    input.value = "";
    refrescarTodo();
});


listaRaiz.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    
    const id = Number(li.dataset.id);

 
    if (e.target.classList.contains("btn-completar")) {
        tareas = tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t);
    }


    if (e.target.classList.contains("btn-eliminar")) {
        tareas = tareas.filter(t => t.id !== id);
    }

    refrescarTodo();
});


refrescarTodo();