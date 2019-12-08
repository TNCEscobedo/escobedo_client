import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Section from "../components/common/Section";
import AdminTable from "../components/table/AdminTable";
import {
  getFilas,
  agregarFila,
  editarFila,
  postFila,
  setPropiedadFila
} from "../actions/tableActions";
import { connect } from "react-redux";

class View extends Component {

  componentDidMount() {
    if(this.props.reducer && this.props.servicio)
    this.props.getFilas(this.props.reducer, this.props.servicio);
  }

  renderButton() {
    if (this.props.editable)
      return (
        <Button
          className="shadow-sm rounded-pill pt-2 pb-2 font-weight-bold ml-auto"
          onClick={() => this.props.agregarFila(this.props.reducer, this.props.schema)}
          style={{ maxWidth: 300 }}
          block
        >
          Agregar
        </Button>
      );
  }

  render() {
    const {
      reducer,
      options,
      idFila,
      exclude,
      headers,
      rows,
      edited
    } = this.props;

    const actions = this.props.editable ? { editarFila, agregarFila, postFila } : { };

    return (
      <Container fluid={true}>
        <Row>
          <Col xs={8}>
            <h1>{this.props.title}</h1>
          </Col>
          <Col xs={4}>{this.renderButton()}</Col>
        </Row>
        <Row>
          <Container fluid={true}>
            <Section>
              <AdminTable
                idFila={idFila}
                exclude={exclude}
                headers={headers}
                options={options}
                rows={rows}
                edited={edited}
                onChange={(key, value) =>
                  this.props.setPropiedadFila(reducer, key, value)
                }
                {...actions}
              />
            </Section>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default connect(null, { getFilas, editarFila, agregarFila, postFila, setPropiedadFila })(View);
