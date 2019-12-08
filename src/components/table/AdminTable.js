import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Input from "../common/Input";

class AdminTable extends Component {
  renderHeaders() {
    if (this.props.headers)
      return this.props.headers.map((header, index) => (
        <th key={index}>{header}</th>
      ));
  }

  renderRows() {
    if (this.props.rows)
      return this.props.rows.map(row => (
        <tr key={row}>{this.renderColumns(row)}</tr>
      ));
  }

  renderColumns(row) {
    return Object.keys(row).map((column, index) => {
      if (this.props.exclude)
        if (this.props.exclude.includes(column)) return null;
      if (this.props.edited[this.props.idRow] === row[this.props.idRow]) {
        let options;
        if (this.props.options) options = this.props.options[column];
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
      return <td key={index}>{row[column]}</td>;
    });
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
