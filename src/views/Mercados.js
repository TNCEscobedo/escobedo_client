import React, { Component } from "react";
import View from "./View";
import MercadosService from "../services/MercadosService";
import ColoniasService from "../services/ColoniasService";
import { getFilas } from "../actions/tableActions";
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

const turnos = [
  { name: "Vespertino", value: "Vespertino" },
  { name: "Matutino", value: "Matutino" }
];

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
    this.props.getFilas("COLONIAS", ColoniasService);
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
          colonia: this.props.colonias
            ? this.props.colonias.map(colonia => ({
                name: colonia.nombre,
                value: colonia.idColonia
              }))
            : []
        }}
        rows={this.props.rows}
        edited={this.props.mercado}
        servicio={MercadosService}
        headers={[
          "Colonia",
          "Dia",
          "Turno",
          "Inicia",
          "Termina",
          "Anexo",
          "Locales"
        ]}
        exclude={["idMercado", "idColonia"]}
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
  mercado: state.mercados.mercado,
  colonias: state.colonias.colonias
});

export default connect(mapStateToProps, { selectTab, getFilas })(Mercados);
