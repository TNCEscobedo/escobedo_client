
    const INITIAL_STATE = {
        mercados: undefined,
        mercado: undefined
      };
      
      export default (state = INITIAL_STATE, action) => {
        switch (action.type) {
          case "MERCADOS_RECIBIDOS":
            return { ...state, mercados: action.payload };
          case "CREATE_MERCADOS":
            return {
              ...state,
              mercados: [...state.mercados, action.payload],
              mercado: action.payload
            };
          case "EDIT_MERCADOS":
            return { ...state, mercado: action.payload };
          case "SET_PROPIEDAD_MERCADOS":
            let mercado = { ...state.mercado };
            mercado[action.payload.key] = action.payload.value;
            return { ...state, mercado };
          case "GUARDAR_MERCADOS":
            let mercados = [...state.mercados];
            let index = mercados.findIndex(
              mercado => mercado.idMercado === action.payload.idMercado
            );
            if (index === -1) mercados.push(action.payload);
            else mercados[index] = action.payload;
            return { ...state, mercados, mercado: undefined };
          case "ELIMINAR_MERCADOS":
            let mercadoss = [...state.mercados];
            let idx = mercadoss.findIndex(
              mercado => mercado.idMercado === action.payload
            );
            if (idx !== -1) mercadoss.splice(idx, 1);
            return { ...state, mercados: mercadoss };
          case "CLEAR_MERCADOS":
            let mercadosss = [...state.mercados];
            let nuevoIndex = mercadosss.findIndex(mercado => mercado.idMercado === "nuevo");
            if(nuevoIndex !== -1) mercadosss.splice(nuevoIndex, 1);
            return { ...state, mercado: undefined, mercados: mercadosss };
          default:
            return { ...state };
        }
      };
      
    