import api from "./api";

const route = "/oferentes";

export default {
    get: () => api.get(route),
    post: oferente => api.post(route, { ...oferente }),
    put: (idOferente, oferente) => api.put(`${route}/${idOferente}`, { ...oferente }),
    delete: idOferente => api.delete(`${route}/${idOferente}`),
}