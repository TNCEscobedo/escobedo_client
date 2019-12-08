import React, { Component } from "react";
import View from "./View";
import { connect } from "react-redux";

const reducer = "DESCUENTOS"

const schema = {
    idDescuento: "nuevo",
    razon: "",
    oferente: "",
}

class Descuentos extends Component {
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
      />
    );
  }
}

const mapStateToProps = state => ({
    descuentos: state.descuentos.descuentos,
    descuento: state.descuentos.descuento
})

export default connect(mapStateToProps, null)(Descuentos);
