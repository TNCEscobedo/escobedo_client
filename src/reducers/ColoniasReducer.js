const INITIAL_STATE = {
  colonias: undefined,
  colonia: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "COLONIAS_RECIBIDOS":
      return { ...state, colonias: action.payload };
    case "CREATE_COLONIAS":
      return {
        ...state,
        colonias: [...state.colonias, action.payload],
        colonia: action.payload
      };
    case "EDIT_COLONIAS":
      return { ...state, colonia: action.payload };
    case "SET_PROPIEDAD_COLONIAS":
      let colonia = { ...state.colonia };
      colonia[action.payload.key] = action.payload.value;
      return { ...state, colonia };
    case "GUARDAR_COLONIAS":
      let colonias = [...state.colonias];
      let index = colonias.findIndex(
        colonia => colonia.idColonia === action.payload.idColonia
      );
      if (index === -1) colonias.push(action.payload);
      else colonias[index] = action.payload;
      return { ...state, colonias };
    case "ELIMINAR_COLONIAS":
      let coloniass = [...state.colonias];
      let idx = coloniass.findIndex(
        colonia => colonia.idColonia === action.payload
      );
      if (idx !== -1) coloniass.splice(idx, 1);
      return { ...state, colonias: coloniass };
    default:
      return { ...state };
  }
};
