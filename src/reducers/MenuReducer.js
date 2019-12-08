const INITIAL_STATE = {
  tabs: [
    "cobros",
    "colonias",
    "mercados",
    "puestos",
    "oferentes",
    "tarifas",
    "descuentos",
    "usuarios",
    "autorizacion"
  ].map(tab => ({
    name: tab,
    title: `${tab[0].toUpperCase()}${tab.substring(1, tab.length)}`,
    link: `/${tab}`
  })),
  selected: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SELECT_TAB":
      return { ...state, selected: action.payload };
    default:
      return { ...state };
  }
};
