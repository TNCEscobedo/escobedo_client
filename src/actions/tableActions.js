export const getFilas = (reducer, servicio) => dispatch => {
  servicio
    .get()
    .then(res => {      
      dispatch({ type: `${reducer}_RECIBIDOS`, payload: res.data });
    })
    .catch(error => {
      if(error.response) console.log(error.response);
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
    let id = `id${reducer[0]}${reducer.substring(1, reducer.length -1).toLowerCase()}`;
    if(isNaN(fila[id])) {
      servicio.post(fila).then(res => {
        const idFila = res.data[id];
        fila[id] = idFila;
        dispatch({ type: `GUARDAR_${reducer}`, payload: fila });
      }).catch(error => {
        if(error.response) console.log(error.response);
        else console.log(error);
      })
    } else {
      servicio.put(fila[id], fila).then(() => {
        dispatch({ type: `GUARDAR_${reducer}`, payload: fila });
      }).catch(error => {
        if(error.response) console.log(error.response);
        else console.log(error);
      })
    }
};

export const eliminarFila = (reducer, idFila) => dispatch => {
  console.log(idFila);
};
