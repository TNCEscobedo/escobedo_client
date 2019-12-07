import api from "./api";

const route = "/descuentos";

export default { 
    get: () => api.get(route),
    post: descuento => api.post(route, { ...descuento }),
    put: (idDescuento, descuento) => api.put(`${route}/${idDescuento}`, { ...descuento }),
    delete: idDescuento => api.delete(`${route}/${idDescuento}`)
}