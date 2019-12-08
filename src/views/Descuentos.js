import React, { Component } from "react";
import View from "./View";
import DescuentosService from "../services/DescuentosService";
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
  }

  render() {
    return (
      <View
        title="Descuentos"
        editable={true}
        headers={["Oferente", "Razon", "Autorizado", "Vigente"]}
        rows={this.props.descuentos}
        edited={this.props.descuento}
        reducer={reducer}
        schema={schema}
        servicio={DescuentosService}
      />
    );
  }
}

const mapStateToProps = state => ({
    descuentos: state.descuentos.descuentos,
    descuento: state.descuentos.descuento
})

export default connect(mapStateToProps, { selectTab })(Descuentos);
