import api from "./api";

const route = "/puestos";

export default {
    get: () => api.get(route),
    post: puesto => api.post(route, { ...puesto }),
    put: (idPuesto, puesto) => api.put(`${route}/${idPuesto}`, { ...puesto }),
    delete: idPuesto => api.delete(`${route}/${idPuesto}`),
}