import React, { Component } from "react";
import View from "./View";
import GirosService from "../services/GirosService";
import { selectTab } from "../actions/menuActions";
import { connect } from "react-redux";

const reducer = "GIROS";

const schema = {
  idGiro: "nuevo",
  nombre: ""
};

class Giros extends Component {
  componentDidMount() {
    this.props.selectTab(reducer.toLowerCase());
  }

  render() {
    return (
      <View
        title="Giros"
        idFila={"idGiro"}
        exclude={["idGiro"]}
        headers={["Nombre"]}
        rows={this.props.giros}
        edited={this.props.giro}
        editable={true}
        reducer={reducer}
        servicio={GirosService}
        schema={schema}
      />
    );
  }
}

const mapStateToProps = state => ({
  giros: state.giros.giros,
  giro: state.giros.giro
});

export default connect(mapStateToProps, { selectTab })(Giros);
