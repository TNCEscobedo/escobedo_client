import api from "./api";

const route = "/inspectores";

export default {
    get: () => api.get(route),
    post: inspector => api.post(route, { ...inspector }),
    put: (idInspector, inspector) => api.put(`${route}/${idInspector}`, { ...inspector }),
    delete: idInspector => api.delete(`${route}/${idInspector}`),
}