const INITIAL_STATE = {
  mercados: [],
  mercado: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_MERCADOS":
      return {
        ...state,
        mercados: [...state.mercados, action.payload],
        mercado: action.payload
      };
    case "SET_PROPIEDAD_MERCADOS":
      let mercado = { ...state.mercado };
      mercado[action.payload.key] = action.payload.value;
      return {
        ...state,
        mercado
      };
    default:
      return { ...state };
  }
};
