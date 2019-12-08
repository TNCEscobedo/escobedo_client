export const getFilas = (reducer, servicio) => dispatch => {
  servicio
    .get()
    .then(res => {
      dispatch({ type: `${reducer}_RECIBIDOS`, payload: res.data });
    })
    .catch(error => {
      console.log(error.response);
    });
};

export const agregarFila = (reducer, elemento) => dispatch => {
  dispatch({ type: `CREATE_${reducer}`, payload: elemento });
};

export const editarFia = (reducer, fila) => dispatch => {};

export const setPropiedadFila = (reducer, key, value) => dispatch => {    
  dispatch({ type: `SET_PROPIEDAD_${reducer}`, payload: { key, value } });
};

export const postFila = (reducer, servicio, fila) => dispatch => {};

export const eliminarFila = (reducer, idFila) => dispatch => {};
