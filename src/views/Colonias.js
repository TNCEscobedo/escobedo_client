import React, { Component } from "react";
import View from "./View";
import { connect } from "react-redux";

const reducer = "COLONIAS";

const schema = {
  idColonia: "nueva",
  nombre: ""
};

class Colonias extends Component {
  render() {
    return (
      <View
        title="Colonias"
        headers={["Nombre"]}
        rows={this.props.colonias}
        edited={this.props.colonia}
        editable={true}
        reducer={reducer}
        schema={schema}
      />
    );
  }
}

const mapStateToProps = state => ({
  colonias: state.colonias.colonias,
  colonia: state.colonias.colonia
});

export default connect(mapStateToProps, null)(Colonias);
