import { combineReducers } from "redux";
import CobrosReducer from "./CobrosReducer";
import ColoniasReducer from "./ColoniasReducer";
import DescuentosReducer from "./DescuentosReducer";
import MercadosReducer from "./MercadosReducer";
import PuestosReducer from "./PuestosReducer";
import TarifasReducer from "./TarifasReducer";
import UsuariosReducer from "./UsuariosReducer";
import MenuReducer from "./MenuReducer";
import OferentesReducer from "./OferentesReducer";
import ModalReducer from "./ModalReducer";
import GirosReducer from "./GirosReducer";
import InspectoresReducer from "./InspectoresReducer";

export default combineReducers({
    cobros: CobrosReducer,
    colonias: ColoniasReducer,
    descuentos: DescuentosReducer,
    mercados: MercadosReducer,
    oferentes: OferentesReducer,
    puestos: PuestosReducer,
    tarifas: TarifasReducer,
    usuarios: UsuariosReducer,
    menu: MenuReducer,
    modal: ModalReducer,
    giros: GirosReducer,
    inspectores: InspectoresReducer
})