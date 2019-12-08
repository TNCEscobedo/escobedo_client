import api from "./api";

const route = "/inspectores";

export default {
  getInspectoresDia: fecha => api.get(`${route}?fecha=${fecha}`),
  getInspectoresIntervalo: (fecha_inicio, fecha_fin) =>
    api.get(
      `${route}?fechaInicio=${fecha_inicio}&fechaFin=${fecha_fin}`
    )
};
