import api from "./api";

const route = "/colonias";

export default { 
    get: () => api.get(route),
    post: colonia => api.post(route, { ...colonia }),
    put: (idColonia, colonia) => api.put(`${route}/${idColonia}`, { ...colonia }),
    delete: idColonia => api.delete(`${route}/${idColonia}`)
}