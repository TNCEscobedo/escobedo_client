import React, { Component } from "react";
import View from "./View";
import { selectTab } from "../actions/menuActions";
import { connect } from "react-redux";

const reducer = "PUESTOS";

const schema = {
    giro: "",
    tarifa: "",
    oferente: ""
}

class Puestos extends Component {

  componentDidMount() {
    this.props.selectTab(reducer.toLowerCase());
  }

  render() {
    return (
      <View
        title="Puestos"
        editable={true}
        headers={["Oferente", "Giro", "Tarifa"]}
        rows={this.props.puestos}
        edited={this.props.puesto}
        options={{
            tarifas: [],
            giro: [],
            oferente: []
        }}        
        schema={schema}
        reducer={reducer}
      />
    );
  }
}

const mapStateToProps = state => ({
  puestos: state.puestos.puestos,
  puesto: state.puestos.puesto
});

export default connect(mapStateToProps, { selectTab })(Puestos);
