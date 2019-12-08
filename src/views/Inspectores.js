import React, { Component } from "react";
import View from "./View";
import Input from "../components/common/Input";
import { clearFilas } from "../actions/tableActions";
import {
  getInspectoresDia,
  getInspectoresIntervalo
} from "../actions/inspectoresActions";
import { selectTab } from "../actions/menuActions";
import { connect } from "react-redux";
import InspectoresService from "../services/InspectoresService";
import moment from "moment";

const reducer = "INSPECTORES";

class Inspectores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: moment()
        .toISOString()
        .substring(0, 10)
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      fecha: moment()
        .toISOString()
        .substring(0, 10)
    });
    this.props.selectTab(reducer.toLowerCase());
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.fecha !== this.state.fecha)
      this.props.getInspectoresDia(this.state.fecha);
  }

  componentWillUnmount() {
    this.props.clearFilas("INSPECTORES");
  }

  handleChange(key, value) {
    this.setState({ fecha: value });
  }

  render() {
    return (
      <View
        title="Inspectores"
        custom={true}
        servicio={InspectoresService}
        reducer={reducer}
        idFila="idInspector"
        exclude={["idInspector"]}
        headers={[
          "Inspector",
          "Mercado",
          "Folios",
          "Recaudado",
          "Pronosticado",
          "Deudores"
        ]}
        prefixes={{
          recaudado: "$",
          pronosticado: "$"
        }}
        rows={this.props.inspectores}
        search={true}
        button={
          <Input
            type="date"
            value={this.state.fecha}
            onChange={this.handleChange}
          />
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  inspectores: state.inspectores.inspectores
});

export default connect(mapStateToProps, {
  selectTab,
  getInspectoresDia,
  getInspectoresIntervalo,
  clearFilas
})(Inspectores);
