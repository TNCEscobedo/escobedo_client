import api from "./api";

const route = "/cobros";

export default { 
    get: () => api.get(route),
    post: cobro => api.post(route, { ...cobro }),
    put: (idCobro, cobro) => api.put(`${route}/${idCobro}`, { ...cobro }),
    delete: idCobro => api.delete(`${route}/${idCobro}`)
}