const fs = require("fs");

const path = __dirname + "/src/reducers/";

const reducers = ["COBROS", "COLONIAS", "DESCUENTOS", "MERCADOS", "OFERENTES", "PUESTOS", "TARIFAS", "USUARIOS"]

const writeReducer = reducer => {

    const plural = reducer.toLowerCase();
    const single = reducer.toLowerCase().substring(0, reducer.length - 1);
    const entidad = `${reducer[0]}${single.substring(1, single.length)}`;

  fs.writeFileSync(
    `${path}${reducer[0]}${reducer.substring(
      1,
      reducer.length
    ).toLowerCase()}Reducer.js`,
    `
    const INITIAL_STATE = {
        ${plural}: undefined,
        ${single}: undefined
      };
      
      export default (state = INITIAL_STATE, action) => {
        switch (action.type) {
          case "${reducer}_RECIBIDOS":
            return { ...state, ${plural}: action.payload };
          case "CREATE_${reducer}":
            return {
              ...state,
              ${plural}: [...state.${plural}, action.payload],
              ${single}: action.payload
            };
          case "EDIT_${reducer}":
            return { ...state, ${single}: action.payload };
          case "SET_PROPIEDAD_${reducer}":
            let ${single} = { ...state.${single} };
            ${single}[action.payload.key] = action.payload.value;
            return { ...state, ${single} };
          case "GUARDAR_${reducer}":
            let ${plural} = [...state.${plural}];
            let index = ${plural}.findIndex(
              ${single} => ${single}.id${entidad} === action.payload.id${entidad}
            );
            if (index === -1) ${plural}.push(action.payload);
            else ${plural}[index] = action.payload;
            return { ...state, ${plural}, ${single}: undefined };
          case "ELIMINAR_${reducer}":
            let ${plural}s = [...state.${plural}];
            let idx = ${plural}s.findIndex(
              ${single} => ${single}.id${entidad} === action.payload
            );
            if (idx !== -1) ${plural}s.splice(idx, 1);
            return { ...state, ${plural}: ${plural}s };
          default:
            return { ...state };
        }
      };
      
    `
  );
};

reducers.forEach(reducer => writeReducer(reducer));