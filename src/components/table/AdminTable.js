import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Input from "../common/Input";
import Button from "react-bootstrap/Button";

class AdminTable extends Component {
  hasActions() {
    if (this.props.editable !== undefined) return this.props.editable;
    return (
      this.props.editarFila !== undefined ||
      this.props.guardarFila !== undefined ||
      this.props.eliminarFila !== undefined
    );
  }

  renderHeaders() {
    if (this.props.headers)
      return this.props.headers
        .map((header, index) => <th key={index}>{header}</th>)
        .concat(
          this.hasActions() ? (
            <th key={this.props.headers.length}>Acciones</th>
          ) : null
        );
  }

  renderRows() {
    if (this.props.rows)
      return this.props.rows.map((row, index) => (
        <tr key={index}>{this.renderColumns(row)}</tr>
      ));
  }

  renderColumns(row) {
    return this.props.headers
      .map((column, index) => {
        column = column.toLowerCase();
        if (this.props.exclude)
          if (this.props.exclude.includes(column)) return null;
        if (this.props.edited)
          if (this.props.edited[this.props.idFila] === row[this.props.idFila]) {
            let options;
            if (this.props.options) options = this.props.options[column];
            if (this.props.editExcluded)
              if (!this.props.editExcluded.includes(column))
                return (
                  <td key={index}>
                    <Input
                      as={options ? "select" : undefined}
                      value={this.props.edited[column]}
                      onChange={this.props.onChange}
                      name={column}
                      options={options}
                    />
                  </td>
                );
              else return <td key={index}>{row[column]}</td>;
            return (
              <td key={index}>
                <Input                  
                  as={options ? "select" : undefined}
                  value={this.props.edited[column]}
                  onChange={this.props.onChange}
                  name={column}
                  options={options}
                />
              </td>
            );
          }
        return (
          <td key={index}>
            {this.props.prefixes
              ? this.props.prefixes[column]
                ? this.props.prefixes[column] + " "
                : ""
              : ""}
            {row[column]}
          </td>
        );
      })
      .concat(
        this.hasActions() ? (
          this.renderActions(row, Object.keys(row).length)
        ) : (
          <td key={this.props.headers.length + 1} />
        )
      );
  }

  renderActions(row, key) {
    if (this.hasActions)
      if (this.props.edited)
        if (this.props.edited[this.props.idFila] === row[this.props.idFila]) {
          return (
            <td className="actions" key={key}>
              <Button
                variant="outline-primary"
                onClick={() => this.props.guardarFila(this.props.edited)}
                block
              >
                Guardar
              </Button>
            </td>
          );
        }
    if (!this.props.edited)
      return (
        <td className="actions" key={key}>
          <Button
            variant="outline-primary"
            className="mr-3"
            onClick={() => this.props.editarFila(row)}
          >
            <i className="fa fa-edit"></i>
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => this.props.eliminarFila(row)}
          >
            <i className="fa fa-trash"></i>
          </Button>
        </td>
      );
    return <td key={key} />;
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>{this.renderHeaders()}</tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </Table>
    );
  }
}

export default AdminTable;
