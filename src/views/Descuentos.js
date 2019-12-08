import React, { Component } from "react";
import View from "./View";
import DescuentosService from "../services/DescuentosService";
import OferentesService from "../services/OferentesService";
import { getFilas } from "../actions/tableActions";
import { selectTab } from "../actions/menuActions";
import { connect } from "react-redux";

const reducer = "DESCUENTOS"

const schema = {
    idDescuento: "nuevo",
    razon: "",
    oferente: "",
}

class Descuentos extends Component {

  componentDidMount() {
    this.props.selectTab(reducer.toLowerCase());
    this.props.getFilas("OFERENTES", OferentesService);
  }

  getOferentes(){
    console.log(this.props.oferentes)
    if(this.props.oferentes)
    return this.props.oferentes.map(oferente => ({ name: oferente.nombre, value: oferente.idOferente }))
  }

  render() {
    return (
      <View
        title="Descuentos"
        editable={true}
        headers={["Oferente", "Razon", "Autorizacion"]}
        rows={this.props.descuentos}
        edited={this.props.descuento}
        reducer={reducer}
        schema={schema}
        servicio={DescuentosService}
        editExcluded={["autorizacion"]}
        options={{
          oferente: this.getOferentes()
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
    oferentes: state.oferentes.oferentes,
    descuentos: state.descuentos.descuentos,
    descuento: state.descuentos.descuento
})

export default connect(mapStateToProps, { selectTab, getFilas })(Descuentos);
