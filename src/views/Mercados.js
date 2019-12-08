import React, { Component } from "react";
import View from "./View";
import MercadosService from "../services/MercadosService";
import { selectTab } from "../actions/menuActions";
import { connect } from "react-redux";

const schema = {
  idMercado: "nuevo",
  colonia: "",
  turno: "",
  inicia: "",
  termina: "",
  dia: "",
  anexo: ""
};

const reducer = "MERCADOS";

const turnos = [{ name: "Vespertino", value: "Vespertino" }, { name: "Matutino", value: "Matutino" }];

const dias = [
  {
    name: "Lunes",
    value: 1
  },
  {
    name: "Martes",
    value: 2
  },
  {
    name: "Miercoles",
    value: 3
  },
  {
    name: "Jueves",
    value: 4
  },
  {
    name: "Viernes",
    value: 5
  },
  {
    name: "Sabado",
    value: 6
  },
  {
    name: "Domingo",
    value: 7
  }
];

class Mercados extends Component {

  componentDidMount() {
    this.props.selectTab(reducer.toLowerCase());
  }

  render() {
    return (
      <View
        title="Mercados"
        onClick={() => this.props.agregarFila(reducer, schema)}
        buttonTitle="Agregar"
        options={{
          dia: dias,
          turno: turnos,
          colonias: [],
        }}
        rows={this.props.mercados}
        edited={this.props.mercado}
        servicio={MercadosService}
        headers={["Colonia", "Turno", "Inicia", "Termina", "Dia", "Anexo"]}
        exclude={["idMercado"]}                
        idFila="idMercado"
        editable={true}
        schema={schema}
        reducer={reducer}
      />
    );
  }
}

const mapStateToProps = state => ({
  mercados: state.mercados.mercados,
  mercado: state.mercados.mercado
});

export default connect(mapStateToProps, { selectTab })(Mercados);
