import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import moment from "moment";
import Section from "../components/common/Section";
import ReactApexChart from "react-apexcharts";
import { clearFilas } from "../actions/tableActions";
import { selectTab } from "../actions/menuActions";
import { getCobrosIntervalo } from "../actions/cobrosActions";
import { getInspectoresIntervalo } from "../actions/inspectoresActions";
import { connect } from "react-redux";

class Analiticas extends Component {
  componentDidMount() {
    let fecha_fin = moment();
    let fecha_inicio = moment().subtract(7, "days");
    fecha_inicio = fecha_inicio.toISOString().substring(0, 10);
    fecha_fin = fecha_fin.toISOString().substring(0, 10);
    this.props.getCobrosIntervalo(fecha_inicio, fecha_fin);
    this.props.getInspectoresIntervalo(fecha_inicio, fecha_fin);
  }

  componentWillUnmount() {
    this.props.clearFilas("INSPECTORES");
    this.props.clearFilas("COBROS");
  }

  renderGrafica(data, name, type, labels) {
    if (data)
      return (
        <ReactApexChart
          options={{
            labels
          }}
          type={type ? type : "area"}
          series={[{ data, name }]}
          width="100%"
        />
      );
  }

  procesarCobros() {
    if (!this.props.cobros) return [];
    let cobros = [];
    let fecha = moment().subtract(7, "days");
    for (let i = 0; i < 7; i++) {
      let cobrosFecha = this.props.cobros.filter(
        cobro =>
          cobro.fecha.substring(0, 10) === fecha.toISOString().substring(0, 10)
      );
      cobros.push({
        fecha,
        monto:
          cobrosFecha.length > 0
            ? cobrosFecha.map(cobro => cobro.monto).reduce((a, c) => a + c)
            : 0
      });
      fecha.add(1, "day");
    }
    return cobros.map(cobro => cobro.monto);
  }

  procesarFoliosInspectores() {
    if (!this.props.inspectores) return [];
    let inspectores = [];
    let fecha = moment().subtract(7, "days");
    for (let i = 0; i < 7; i++) {
      let inspectoresFecha = this.props.inspectores.filter(
        inspector =>
          inspector.fecha.substring(0, 10) ===
          fecha.toISOString().substring(0, 10)
      );
      inspectores.push({
        fecha,
        folios:
          inspectoresFecha.length > 0
            ? inspectoresFecha
                .map(inspector => inspector.folios)
                .reduce((a, c) => a + c)
            : 0
      });
      fecha.add(1, "day");
    }
    return inspectores.map(inspector => inspector.folios);
  }

  procesarInspectores() {
    if (!this.props.inspectores) return [];
    let inspectores = [];
    let nombres = [
      ...new Set(this.props.inspectores.map(inspector => inspector.inspector))
    ];
    nombres.forEach(nombre => {
      let inspector = this.props.inspectores.filter(
        inspector => inspector.inspector === nombre
      );
      let folios = inspector.map(inspectorado => inspectorado.folios);
      let total = folios.length > 0 ? folios.reduce((a, b) => a + b) : 0;
      inspectores.push({ nombre, total });
    });
    return inspectores.map(inspector => inspector.total);
  }

  render() {
    if (this.props.cobros) this.procesarCobros();
    return (
      <Container fluid={true}>
        <Container>
          <Row>
            <Container fluid={true}>
              <h1>Analiticas</h1>
            </Container>
          </Row>
          <Row className="mt-4">
            <Container fluid={true}>
              <h3 className="mb-3">Ingresos Diarios Totales</h3>
              <Section>
                {this.renderGrafica(this.procesarCobros(), "Ingresos")}
              </Section>
            </Container>
          </Row>
          <Row className="mt-4">
            <Container fluid={true}>
              <h3 className="mb-3">Folios Diarios Totales</h3>
              <Section>
                {this.renderGrafica(
                  this.procesarFoliosInspectores(),
                  "Inspectores"
                )}
              </Section>
            </Container>
          </Row>
          <Row className="mt-4">
            <Container fluid={true}>
              <h3 className="mb-3">Folios por Inspector</h3>
              <Section>
                {this.renderGrafica(
                  this.procesarInspectores(),
                  "Inspectores",
                  "bar",
                  [
                    ...new Set(
                      this.props.inspectores
                        ? this.props.inspectores.map(
                            inspector => inspector.inspector
                          )
                        : []
                    )
                  ]
                )}
              </Section>
            </Container>
          </Row>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cobros: state.cobros.cobros,
  inspectores: state.inspectores.inspectores
});

export default connect(mapStateToProps, {
  getCobrosIntervalo,
  getInspectoresIntervalo,
  selectTab,
  clearFilas
})(Analiticas);
