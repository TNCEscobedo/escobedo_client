import api from "./api";

const route = "/giros";

export default { 
    get: () => api.get(route),
    post: giro => api.post(route, { ...giro }),
    put: (idGiro, giro) => api.put(`${route}/${idGiro}`, { ...giro }),
    delete: idGiro => api.delete(`${route}/${idGiro}`)
}