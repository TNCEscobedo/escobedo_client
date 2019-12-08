import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Section from "../components/common/Section";
import AdminTable from "../components/table/AdminTable";
import Spinner from "react-bootstrap/Spinner";
import Input from "../components/common/Input";
import {
  getFilas,
  agregarFila,
  editarFila,
  postFila,
  setPropiedadFila,
  eliminarFila,
  clearEdited
} from "../actions/tableActions";
import { confirm } from "../actions/modalActions";
import { connect } from "react-redux";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  componentDidMount() {
    if (this.props.reducer && this.props.servicio && !this.props.custom)
      this.props.getFilas(this.props.reducer, this.props.servicio);
  }

  searchRows(query) {
    this.setState({ query });
    if (!this.props.rows) return;        
    if (isNaN(query)) query = query.toLowerCase();
    let searchResult = this.props.rows.filter(row => {
      let result = Object.keys(row).filter(column => {
        if (isNaN(row[column])) {             
          if (row[column].toLowerCase().startsWith(query)) {            
            return row;
          }
        } else if (row[column] === query) {
          return row;
        } else if (row[column] === Number(query)) {
          return row;
        }
        return null;
      });
      return result.length > 0;
    });
    this.setState({ searchResult });
  }

  renderSearch() {
    if (this.props.search)
      return (
        <Container fluid={true}>
          <Input
            type="text"
            placeholder="Buscar"
            value={this.state.query}
            onChange={(key, query) => this.searchRows(query)}
          />
        </Container>
      );
  }

  renderButton() {
    if (this.props.editable && !this.props.edited)
      return (
        <Button
          className="shadow-sm rounded-pill pt-2 pb-2 font-weight-bold ml-auto"
          onClick={() =>
            this.props.agregarFila(this.props.reducer, this.props.schema)
          }
          style={{ maxWidth: 300 }}
          block
        >
          Agregar
        </Button>
      );
    else if (this.props.editable)
      return (
        <Button
          className="shadow-sm rounded-pill pt-2 pb-2 font-weight-bold ml-auto"
          variant="outline-danger"
          style={{ maxWidth: 300 }}
          onClick={() => this.props.clearEdited(this.props.reducer)}
          block
        >
          Cancelar
        </Button>
      );
  }

  renderTable() {
    if (!this.props.rows) return <Spinner animation="border" variant="dark" />;
    const {
      exclude,
      headers,
      edited,
      options,
      reducer,
      idFila,
      servicio,
      editExcluded,
      editable
    } = this.props;

    let rows = this.props.rows;    
    if(this.state.searchResult) rows = this.state.searchResult;

    const actions = this.props.editable
      ? {
          editarFila: fila => this.props.editarFila(reducer, fila),
          guardarFila: fila => this.props.postFila(reducer, servicio, fila),
          eliminarFila: fila =>
            this.props.confirm(
              `¿Estás seguro que deseas eliminar ${fila.nombre}?`,
              () => this.props.eliminarFila(reducer, servicio, fila[idFila])
            )
        }
      : {};    
    return (
      <AdminTable
        editExcluded={editExcluded}
        idFila={idFila}
        exclude={exclude}
        headers={headers}
        options={options}
        rows={rows}
        edited={edited}
        editable={editable}
        onChange={(key, value) =>
          this.props.setPropiedadFila(reducer, key, value)
        }
        prefixes={this.props.prefixes}
        {...actions}
      />
    );
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs={8}>
            <h1>{this.props.title}</h1>
          </Col>
          <Col xs={4}>{this.renderButton()}</Col>
        </Row>
        <Row>{this.renderSearch()}</Row>
        <Row>
          <Container fluid={true}>
            <Section>{this.renderTable()}</Section>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default connect(null, {
  getFilas,
  editarFila,
  agregarFila,
  postFila,
  setPropiedadFila,
  eliminarFila,
  confirm,
  clearEdited
})(View);
