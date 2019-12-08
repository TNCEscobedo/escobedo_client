const INITIAL_STATE = {
  tarifas: undefined,
  tarifa: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TARIFAS_RECIBIDOS":
      return { ...state, tarifas: action.payload };
    case "CREATE_TARIFAS":
      return {
        ...state,
        tarifas: [...state.tarifas, action.payload],
        tarifa: action.payload
      };
    case "EDIT_TARIFAS":
      return { ...state, tarifa: action.payload };
    case "SET_PROPIEDAD_TARIFAS":
      let tarifa = { ...state.tarifa };
      tarifa[action.payload.key] = action.payload.value;
      return { ...state, tarifa };
    case "GUARDAR_TARIFAS":
      let tarifas = [...state.tarifas];
      let index = tarifas.findIndex(
        tarifa => tarifa.idTarifa === action.payload.idTarifa
      );
      if (index === -1) tarifas.push(action.payload);
      else tarifas[index] = action.payload;
      return { ...state, tarifas, tarifa: undefined };
    case "ELIMINAR_TARIFAS":
      let tarifass = [...state.tarifas];
      let idx = tarifass.findIndex(
        tarifa => tarifa.idTarifa === action.payload
      );
      if (idx !== -1) tarifass.splice(idx, 1);
      return { ...state, tarifas: tarifass };
    case "CLEAR_TARIFAS":
      let tarifasss = [...state.tarifas];
      let nuevoIndex = tarifasss.findIndex(
        tarifa => tarifa.idTarifa === "nuevo"
      );
      if (nuevoIndex !== -1) tarifasss.splice(nuevoIndex, 1);
      return { ...state, tarifa: undefined, tarifas: tarifasss };
    default:
      return { ...state };
  }
};
