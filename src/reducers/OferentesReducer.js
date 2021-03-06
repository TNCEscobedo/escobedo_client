
    const INITIAL_STATE = {
        oferentes: undefined,
        oferente: undefined
      };
      
      export default (state = INITIAL_STATE, action) => {
        switch (action.type) {
          case "OFERENTES_RECIBIDOS":
            return { ...state, oferentes: action.payload };
          case "CREATE_OFERENTES":
            return {
              ...state,
              oferentes: [action.payload, ...state.oferentes],
              oferente: action.payload
            };
          case "EDIT_OFERENTES":
            return { ...state, oferente: action.payload };
          case "SET_PROPIEDAD_OFERENTES":
            let oferente = { ...state.oferente };
            oferente[action.payload.key] = action.payload.value;
            return { ...state, oferente };
          case "GUARDAR_OFERENTES":
            let oferentes = [...state.oferentes];
            let index = oferentes.findIndex(
              oferente => oferente.idOferente === action.payload.idOferente
            );
            if (index === -1) oferentes.unshift(action.payload);
            else oferentes[index] = action.payload;
            return { ...state, oferentes, oferente: undefined };
          case "ELIMINAR_OFERENTES":
            let oferentess = [...state.oferentes];
            let idx = oferentess.findIndex(
              oferente => oferente.idOferente === action.payload
            );
            if (idx !== -1) oferentess.splice(idx, 1);
            return { ...state, oferentes: oferentess };
          case "CLEAR_OFERENTES":
            let oferentesss = [...state.oferentes];
            let nuevoIndex = oferentesss.findIndex(oferente => oferente.idOferente === "nuevo");
            if(nuevoIndex !== -1) oferentesss.splice(nuevoIndex, 1);
            return { ...state, oferente: undefined, oferentes: oferentesss };
          default:
            return { ...state };
        }
      };
      
    