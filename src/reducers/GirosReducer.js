
    const INITIAL_STATE = {
        giros: undefined,
        giro: undefined
      };
      
      export default (state = INITIAL_STATE, action) => {
        switch (action.type) {
          case "GIROS_RECIBIDOS":
            return { ...state, giros: action.payload };
          case "CREATE_GIROS":
            return {
              ...state,
              giros: [action.payload, ...state.giros],
              giro: action.payload
            };
          case "EDIT_GIROS":
            return { ...state, giro: action.payload };
          case "SET_PROPIEDAD_GIROS":
            let giro = { ...state.giro };
            giro[action.payload.key] = action.payload.value;
            return { ...state, giro };
          case "GUARDAR_GIROS":
            let giros = [...state.giros];
            let index = giros.findIndex(
              giro => giro.idGiro === action.payload.idGiro
            );
            if (index === -1) giros.unshift(action.payload);
            else giros[index] = action.payload;
            return { ...state, giros, giro: undefined };
          case "ELIMINAR_GIROS":
            let giross = [...state.giros];
            let idx = giross.findIndex(
              giro => giro.idGiro === action.payload
            );
            if (idx !== -1) giross.splice(idx, 1);
            return { ...state, giros: giross };
          case "CLEAR_GIROS":
            let girosss = [...state.giros];
            let nuevoIndex = girosss.findIndex(giro => giro.idGiro === "nuevo");
            if(nuevoIndex !== -1) girosss.splice(nuevoIndex, 1);
            return { ...state, giro: undefined, giros: girosss };
          default:
            return { ...state };
        }
      };
      
    