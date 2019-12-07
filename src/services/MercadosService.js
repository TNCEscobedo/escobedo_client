import api from "./api";

const route = "/mercados";

export default {
    get: () => api.get(route),
    post: mercado => api.post(route, { ...mercado }),
    put: (idMercado, mercado) => api.put(`${route}/${idMercado}`, { ...mercado }),
    delete: idMercado => api.delete(`${route}/${idMercado}`),
}