const INITIAL_STATE = {
  cobros: undefined,
  cobro: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "COBROS_RECIBIDOS":
      return { ...state, cobros: action.payload };
    case "CREATE_COBROS":
      return {
        ...state,
        cobros: [...state.cobros, action.payload],
        cobro: action.payload
      };
    case "EDIT_COBROS":
      return { ...state, cobro: action.payload };
    case "SET_PROPIEDAD_COBROS":
      let cobro = { ...state.cobro };
      cobro[action.payload.key] = action.payload.value;
      return { ...state, cobro };
    case "GUARDAR_COBROS":
      let cobros = [...state.cobros];
      let index = cobros.findIndex(
        cobro => cobro.idCobro === action.payload.idCobro
      );
      if (index === -1) cobros.push(action.payload);
      else cobros[index] = action.payload;
      return { ...state, cobros, cobro: undefined };
    case "ELIMINAR_COBROS":
      let cobross = [...state.cobros];
      let idx = cobross.findIndex(cobro => cobro.idCobro === action.payload);
      if (idx !== -1) cobross.splice(idx, 1);
      return { ...state, cobros: cobross };
    default:
      return { ...state };
  }
};
