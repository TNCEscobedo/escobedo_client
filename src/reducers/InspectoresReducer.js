const INITIAL_STATE = {
  inspectores: undefined,
  inspectore: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INSPECTORES_RECIBIDOS":
      return { ...state, inspectores: action.payload };
    case "CREATE_INSPECTORES":
      return {
        ...state,
        inspectores: [action.payload, ...state.inspectores],
        inspectore: action.payload
      };
    case "EDIT_INSPECTORES":
      return { ...state, inspectore: action.payload };
    case "SET_PROPIEDAD_INSPECTORES":
      let inspectore = { ...state.inspectore };
      inspectore[action.payload.key] = action.payload.value;
      return { ...state, inspectore };
    case "GUARDAR_INSPECTORES":
      let inspectores = [...state.inspectores];
      let index = inspectores.findIndex(
        inspectore => inspectore.idInspectore === action.payload.idInspectore
      );
      if (index === -1) inspectores.unshift(action.payload);
      else inspectores[index] = action.payload;
      return { ...state, inspectores, inspectore: undefined };
    case "ELIMINAR_INSPECTORES":
      let inspectoress = [...state.inspectores];
      let idx = inspectoress.findIndex(
        inspectore => inspectore.idInspectore === action.payload
      );
      if (idx !== -1) inspectoress.splice(idx, 1);
      return { ...state, inspectores: inspectoress };
    case "CLEAR_INSPECTORES":
      let inspectoresss = [...state.inspectores];
      let nuevoIndex = inspectoresss.findIndex(
        inspectore => inspectore.idInspectore === "nuevo"
      );
      if (nuevoIndex !== -1) inspectoresss.splice(nuevoIndex, 1);
      return { ...state, inspectore: undefined, inspectores: inspectoresss };
    default:
      return { ...state };
  }
};
