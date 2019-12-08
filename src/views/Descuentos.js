import React, { Component } from "react";
import View from "./View";
import { connect } from "react-redux";

class Descuentos extends Component {
  render() {
    return (
      <View
        title="Descuentos"
        editable={true}
        headers={["Oferente", "Razon", "Autorizado", "Vigente"]}
        rows={this.props.descuentos}
      />
    );
  }
}

const mapStateToProps = state => ({
    descuentos: state.descuentos.descuentos,
    descuento: state.descuentos.descuento
})

export default connect(mapStateToProps, null)(Descuentos);
