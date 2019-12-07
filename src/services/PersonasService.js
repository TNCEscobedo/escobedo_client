import api from "./api";

const route = "/personas";

export default {
    get: () => api.get(route),
    post: persona => api.post(route, { ...persona }),
    put: (idPersona, persona) => api.put(`${route}/${idPersona}`, { ...persona }),
    delete: idPersona => api.delete(`${route}/${idPersona}`),
}