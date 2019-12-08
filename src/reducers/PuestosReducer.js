const INITIAL_STATE = {
  puestos: undefined,
  puesto: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PUESTOS_RECIBIDOS":
      return { ...state, puestos: action.payload };
    case "CREATE_PUESTOS":
      return {
        ...state,
        puestos: [...state.puestos, action.payload],
        puesto: action.payload
      };
    case "EDIT_PUESTOS":
      return { ...state, puesto: action.payload };
    case "SET_PROPIEDAD_PUESTOS":
      let puesto = { ...state.puesto };
      puesto[action.payload.key] = action.payload.value;
      return { ...state, puesto };
    case "GUARDAR_PUESTOS":
      let puestos = [...state.puestos];
      let index = puestos.findIndex(
        puesto => puesto.idPuesto === action.payload.idPuesto
      );
      if (index === -1) puestos.push(action.payload);
      else puestos[index] = action.payload;
      return { ...state, puestos, puesto: undefined };
    case "ELIMINAR_PUESTOS":
      let puestoss = [...state.puestos];
      let idx = puestoss.findIndex(
        puesto => puesto.idPuesto === action.payload
      );
      if (idx !== -1) puestoss.splice(idx, 1);
      return { ...state, puestos: puestoss };
    case "CLEAR_PUESTOS":
      let puestosss = [...state.puestos];
      let nuevoIndex = puestosss.findIndex(
        puesto => puesto.idPuesto === "nuevo"
      );
      if (nuevoIndex !== -1) puestosss.splice(nuevoIndex, 1);
      return { ...state, puesto: undefined, puestos: puestosss };
    default:
      return { ...state };
  }
};
