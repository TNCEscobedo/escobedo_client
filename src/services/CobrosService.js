import api from "./api";

const route = "/cobros";

export default {
  get: () => api.get(route),
  post: cobro => api.post(route, { ...cobro }),
  put: (idCobro, cobro) => api.put(`${route}/${idCobro}`, { ...cobro }),
  delete: idCobro => api.delete(`${route}/${idCobro}`),
  getCobrosFecha: fecha => api.get(`${route}?fecha=${fecha}`),
  getCobrosIntervalo: (fecha_inicio, fecha_fin) =>
    api.get(`${route}?fecha_inicio=${fecha_inicio}&fecha_fin=${fecha_fin}`)
};
