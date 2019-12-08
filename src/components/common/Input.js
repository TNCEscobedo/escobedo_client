import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if(this.props.as === "select" && (!this.props.value || this.props.value === ""))
      if(this.props.options[0])
        this.props.onChange(this.props.name, this.props.options[0].value);
  }

  handleChange(e) {
    if (this.props.onChange) this.props.onChange(e.target.name, e.target.value);
  }

  renderLabel() {
    if (this.props.label) return <Form.Label>{this.props.label}</Form.Label>;
  }

  renderOptions() {
    if (this.props.options)
      return this.props.options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      ));
  }

  renderInput() {
    if (this.props.as) {
      if (this.props.as === "select")
        return (
          <Form.Control
            as="select"
            value={this.props.value}
            name={this.props.name}
            onChange={this.handleChange}
          >
            {this.renderOptions()}
          </Form.Control>
        );
      return (
        <Form.Control
          as={this.props.as}
          value={this.props.value}
          name={this.props.name}
          onChange={this.handleChange}
        />
      );
    }
    return (
      <Form.Control
        type={this.props.type}
        value={this.props.value}
        name={this.props.name}
        onChange={this.handleChange}
      />
    );
  }

  render() {
    return (
      <Form.Group>
        {this.renderLabel()}
        {this.renderInput()}
      </Form.Group>
    );
  }
}
