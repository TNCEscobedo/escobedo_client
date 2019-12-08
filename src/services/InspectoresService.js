import api from "./api";

const route = "/inspectores";

export default {
  getInspectoresDia: fecha => api.get(`${route}/inspectores?fecha=${fecha}`),
  getInspectoresIntervalo: (fecha_inicio, fecha_fin) =>
    api.get(
      `${route}/inspectores?fecha_inicio=${fecha_inicio}&fecha_fin=${fecha_fin}`
    )
};
