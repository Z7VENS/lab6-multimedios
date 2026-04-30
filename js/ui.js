export const renderizar = (contenedor, arrayTareas) => {
    contenedor.innerHTML = arrayTareas.map(t => `
        <li data-id="${t.id}" class="${t.completada ? 'completada' : ''}">
            <span>${t.texto}</span>
            <div class="acciones">
                <button class="btn-completar">✔</button>
                <button class="btn-eliminar">X</button>
            </div>
        </li>
    `).join('');
};

export const actualizarContador = (elemento, arrayTareas) => {
    const pendientes = arrayTareas.filter(t => !t.completada).length;
    elemento.textContent = "Pendientes: " + pendientes;
};