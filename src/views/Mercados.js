import React, { Component } from "react";
import View from "./View";
import Section from "../components/common/Section";
import AdminTable from "../components/table/AdminTable";
import {
  getFilas,
  agregarFila,
  editarFia,
  postFila,
  setPropiedadFila
} from "../actions/tableActions";
import MercadosService from "../services/MercadosService";
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

const turnos = [{ name: "Vespertino" }, { name: "Matutino" }];

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
    this.props.getFilas(reducer, MercadosService);
  }

  render() {
    return (
      <View
        title="Mercados"
        onClick={() => this.props.agregarFila(reducer, schema)}
        buttonTitle="Agregar"
      >
        <Section>
          <AdminTable
            idFila={"idMercado"}
            exclude={["idMercado"]}
            headers={["Colonia", "Turno", "Inicia", "Termina", "Dia", "Anexo"]}
            options={{
              colonia: [],
              /*this.props.colonias.map(colonia => ({
                name: colonia.nombre,
                value: colonia.idColonia
              })),*/
              turno: turnos,
              dia: dias
            }}
            rows={this.props.mercados}
            edited={this.props.mercado}
            onChange={(key, value) =>
              this.props.setPropiedadFila(reducer, key, value)
            }
            guardarFila={() => {}}
          />
        </Section>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  mercados: state.mercados.mercados,
  mercado: state.mercados.mercado
});

export default connect(mapStateToProps, {
  getFilas,
  agregarFila,
  editarFia,
  postFila,
  setPropiedadFila
})(Mercados);
