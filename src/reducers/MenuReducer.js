const INITIAL_STATE = {
  tabs: [
    "cobros",
    "colonias",
    "mercados",
    "puestos",
    "oferentes",
    "tarifas",
    "descuentos",
    "inspectores",
    "usuarios",
    "autorizacion"
  ].map(tab => ({
      name: tab,
      title: `${tab[0].toUpperCase()}${tab.substring(1, tab.length)}`,
      link: `/${tab}`
  }))
};

export default (state = INITIAL_STATE) => {
  return { ...state };
};
