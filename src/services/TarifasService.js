import api from "./api";

const route = "/tarifas";

export default {
    get: () => api.get(route),
    post: tarifa => api.post(route, { ...tarifa }),
    put: (idTarifa, tarifa) => api.put(`${route}/${idTarifa}`, { ...tarifa }),
    delete: idTarifa => api.delete(`${route}/${idTarifa}`),
}