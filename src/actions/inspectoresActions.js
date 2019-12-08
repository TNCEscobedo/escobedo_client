import { SHOW_ALERT, CLEAR_ALERT } from "./types";
import InspectoresService from "../services/InspectoresService";

export const getInspectoresDia = fecha => dispatch => {
  InspectoresService.getInspectoresDia(fecha)
    .then(res => {
      const inspectores = res.data;
      dispatch({ type: "INSPECTORES_RECIBIDOS", payload: inspectores });
    })
    .catch(error => {
      dispatch({
        type: SHOW_ALERT,
        payload: "Hubo un error al obtener los cambios"
      });
      setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
      if (error.response) console.log(error.response);
      else console.log(error);
    });
};

export const getInspectoresIntervalo = (
  fecha_inicio,
  fecha_fin
) => dispatch => {
  InspectoresService.getInspectoresIntervalo(fecha_inicio, fecha_fin)
    .then(res => {
      const inspectores = res.data;
      dispatch({ type: "INSPECTORES_RECIBIDOS", payload: inspectores });
    })
    .catch(error => {
      dispatch({
        type: SHOW_ALERT,
        payload: "Hubo un error al obtener los cambios"
      });
      setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
      if (error.response) console.log(error.response);
      else console.log(error);
    });
};
