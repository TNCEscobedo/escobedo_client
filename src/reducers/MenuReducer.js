const INITIAL_STATE = {
  tabs: [
    "cobros",
    "inspectores",    
    "mercados",
    "puestos",
    "giros",
    "oferentes",
    "tarifas",    
    "descuentos",
    "usuarios",
    "colonias",
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
