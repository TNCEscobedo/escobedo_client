const INITIAL_STATE = {
  descuentos: undefined,
  descuento: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DESCUENTOS_RECIBIDOS":
      return { ...state, descuentos: action.payload };
    case "CREATE_DESCUENTOS":
      return {
        ...state,
        descuentos: [...state.descuentos, action.payload],
        descuento: action.payload
      };
    case "EDIT_DESCUENTOS":
      return { ...state, descuento: action.payload };
    case "SET_PROPIEDAD_DESCUENTOS":
      let descuento = { ...state.descuento };
      descuento[action.payload.key] = action.payload.value;
      return { ...state, descuento };
    case "GUARDAR_DESCUENTOS":
      let descuentos = [...state.descuentos];
      let index = descuentos.findIndex(
        descuento => descuento.idDescuento === action.payload.idDescuento
      );
      if (index === -1) descuentos.push(action.payload);
      else descuentos[index] = action.payload;
      return { ...state, descuentos };
    case "ELIMINAR_DESCUENTOS":
      let descuentoss = [...state.descuentos];
      let idx = descuentoss.findIndex(
        descuento => descuento.idDescuento === action.payload
      );
      if (idx !== -1) descuentoss.splice(idx, 1);
      return { ...state, descuentos: descuentoss };
    default:
      return { ...state };
  }
};
