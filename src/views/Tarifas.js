import React, { Component } from "react";
import View from "./View";
import { selectTab } from "../actions/menuActions";
import { connect } from "react-redux";

const reducer = "TARIFAS";

const schema = {
    idTarifa: "nueva",
    superficie: "",
    monto: ""
};

class Tarifas extends Component {

  componentDidMount() {
    this.props.selectTab(reducer.toLowerCase());
  }

  render() {
    return (
      <View
        title="Tarifas"
        editable={true}
        headers={["Superficie", "Monto"]}
        rows={this.props.tarifas}
        edited={this.props.tarifa}
        schema={schema}
        reducer={reducer}
      />
    );
  }
}

const mapStateToProps = state => ({
  tarifas: state.tarifas.tarifas,
  tarifa: state.tarifas.tarifas
});

export default connect(mapStateToProps, { selectTab })(Tarifas);
