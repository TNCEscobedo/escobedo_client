import { SHOW_ALERT, CLEAR_ALERT } from "./types";
import CobrosService from "../services/CobrosService";

export const getCobrosDia = fecha => dispatch => {
  CobrosService.getCobrosDia(fecha)
    .then(res => {
      const cobros = res.data;
      dispatch({ type: "COBROS_RECIBIDOS", payload: cobros });
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

export const getCobrosIntervalo = (fecha_inicio, fecha_fin) => dispatch => {
  CobrosService.getCobrosIntervalo(fecha_inicio, fecha_fin)
    .then(res => {
      const cobros = res.data;
      dispatch({ type: "COBROS_RECIBIDOS", payload: cobros });
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
