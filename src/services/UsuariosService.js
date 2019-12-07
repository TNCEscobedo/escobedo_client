import api from "./api";

const route = "/usuarios";

export default {
    get: () => api.get(route),
    post: usuario => api.post(route, { ...usuario }),
    put: (idUsuario, usuario) => api.put(`${route}/${idUsuario}`, { ...usuario }),
    delete: idUsuario => api.delete(`${route}/${idUsuario}`)
}