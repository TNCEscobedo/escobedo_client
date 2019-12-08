import { SHOW_SUCCESS, CLEAR_SUCCESS, SHOW_ALERT, CLEAR_ALERT } from "./types";

export const getFilas = (reducer, servicio) => dispatch => {
  servicio
    .get()
    .then(res => {
      console.log(res.data);
      dispatch({ type: `${reducer}_RECIBIDOS`, payload: res.data });
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

export const agregarFila = (reducer, elemento) => dispatch => {
  dispatch({ type: `CREATE_${reducer}`, payload: elemento });
};

export const editarFila = (reducer, fila) => dispatch => {
  dispatch({ type: `EDIT_${reducer}`, payload: fila });
};

export const setPropiedadFila = (reducer, key, value) => dispatch => {
  dispatch({ type: `SET_PROPIEDAD_${reducer}`, payload: { key, value } });
};

export const postFila = (reducer, servicio, fila) => dispatch => {
  let id = `id${reducer[0]}${reducer
    .substring(1, reducer.length - 1)
    .toLowerCase()}`;
  if (isNaN(fila[id])) {
    servicio
      .post(fila)
      .then(res => {
        const idFila = res.data[id];
        fila[id] = idFila;
        dispatch({
          type: SHOW_SUCCESS,
          payload: "Cambios guardados con exito"
        });
        setTimeout(() => dispatch({ type: CLEAR_SUCCESS }), 3000);
        dispatch({ type: `ELIMINAR_${reducer}`, payload: "nuevo" });
        dispatch({ type: `GUARDAR_${reducer}`, payload: fila });
      })
      .catch(error => {
        if (error.response) console.log(error.response);
        else console.log(error);
      });
  } else {
    servicio
      .put(fila[id], fila)
      .then(() => {
        dispatch({
          type: SHOW_SUCCESS,
          payload: "Cambios guardados con exito"
        });
        setTimeout(() => dispatch({ type: CLEAR_SUCCESS }), 3000);
        dispatch({ type: `GUARDAR_${reducer}`, payload: fila });
      })
      .catch(error => {
        dispatch({
          type: SHOW_ALERT,
          payload: "Hubo un error al guardar los cambios"
        });
        setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
        if (error.response) console.log(error.response);
        else console.log(error);
      });
  }
};

export const clearEdited = reducer => dispatch => {
  dispatch({ type: `CLEAR_${reducer}` });
};

export const eliminarFila = (reducer, servicio, idFila) => dispatch => {
  servicio
    .delete(idFila)
    .then(() => {
      dispatch({ type: `ELIMINAR_${reducer}`, payload: idFila });
      dispatch({ type: SHOW_SUCCESS, payload: "Cambios guardados con exito" });
      setTimeout(() => dispatch({ type: CLEAR_SUCCESS }), 3000);
    })
    .catch(error => {
      dispatch({
        type: SHOW_ALERT,
        payload: "Hubo un error al guardar los cambios"
      });
      setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
      if (error.response) console.log(error.response);
      else console.log(error);
    });
};
