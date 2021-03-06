const INITIAL_STATE = {
  usuarios: undefined,
  usuario: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "USUARIOS_RECIBIDOS":
      return { ...state, usuarios: action.payload };
    case "CREATE_USUARIOS":
      return {
        ...state,
        usuarios: [...state.usuarios, action.payload],
        usuario: action.payload
      };
    case "EDIT_USUARIOS":
      return { ...state, usuario: action.payload };
    case "SET_PROPIEDAD_USUARIOS":
      let usuario = { ...state.usuario };
      usuario[action.payload.key] = action.payload.value;
      return { ...state, usuario };
    case "GUARDAR_USUARIOS":
      let usuarios = [...state.usuarios];
      let index = usuarios.findIndex(
        usuario => usuario.idUsuario === action.payload.idUsuario
      );
      if (index === -1) usuarios.push(action.payload);
      else usuarios[index] = action.payload;
      return { ...state, usuarios, usuario: undefined };
    case "ELIMINAR_USUARIOS":
      let usuarioss = [...state.usuarios];
      let idx = usuarioss.findIndex(
        usuario => usuario.idUsuario === action.payload
      );
      if (idx !== -1) usuarioss.splice(idx, 1);
      return { ...state, usuarios: usuarioss };
    case "CLEAR_USUARIOS":
      let usuariosss = [...state.usuarios];
      let nuevoIndex = usuariosss.findIndex(
        usuario => usuario.idUsuario === "nuevo"
      );
      if (nuevoIndex !== -1) usuariosss.splice(nuevoIndex, 1);
      return { ...state, usuario: undefined, usuarios: usuariosss };
    default:
      return { ...state };
  }
};
