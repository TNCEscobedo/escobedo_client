import { combineReducers } from "redux";
import CobrosReducer from "./CobrosReducer";
import ColoniasReducer from "./ColoniasReducer";
import DescuentosReducer from "./DescuentosReducer";
import InspectoresReducer from "./InspectoresReducer";
import MercadosReducer from "./MercadosReducer";
import PuestosReducer from "./PuestosReducer";
import TarifasReducer from "./TarifasReducer";
import UsuariosReducer from "./UsuariosReducer";
import MenuReducer from "./MenuReducer";
import OferentesReducer from "./OferentesReducer";

export default combineReducers({
    cobros: CobrosReducer,
    colonias: ColoniasReducer,
    descuentos: DescuentosReducer,
    inspectores: InspectoresReducer,
    mercados: MercadosReducer,
    oferentes: OferentesReducer,
    puestos: PuestosReducer,
    tarifas: TarifasReducer,
    usuarios: UsuariosReducer,
    menu: MenuReducer
})