import React, { Component } from "react";
import View from "./View";
import ColoniasService from "../services/ColoniasService";
import { selectTab } from "../actions/menuActions";
import { connect } from "react-redux";

const reducer = "COLONIAS";

const schema = {
  idColonia: "nuevo",
  nombre: ""
};

class Colonias extends Component {

  componentDidMount() {
    this.props.selectTab(reducer.toLowerCase());
  }

  render() {
    return (
      <View
        title="Colonias"
        idFila="idColonia"
        exclude={["idColonia"]}
        headers={["Nombre"]}
        rows={this.props.colonias}
        edited={this.props.colonia}
        editable={true}
        reducer={reducer}
        schema={schema}
        servicio={ColoniasService}
      />
    );
  }
}

const mapStateToProps = state => ({
  colonias: state.colonias.colonias,
  colonia: state.colonias.colonia
});

export default connect(mapStateToProps, { selectTab })(Colonias);
