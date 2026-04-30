const KEY = 'tareas_lab6_ucr';

export const guardar = (tareas) => {
    localStorage.setItem(KEY, JSON.stringify(tareas));
};

export const cargar = () => {
    const datos = localStorage.getItem(KEY);
    return datos ? JSON.parse(datos) : [];
};