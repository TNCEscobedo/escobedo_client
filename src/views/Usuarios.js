import React, { Component } from "react";
import View from "./View";
import { connect } from "react-redux";

const reducer = "USUARIOS";

const schema = {
  idUsuario: "",
  correo: "",
  telefono: ""
}

class Usuarios extends Component {
  render() {
    return (
      <View
        title="Usuarios"
        editable={true}
        headers={["Nombre", "Correo Electrónico", "Teléfono"]}
        rows={this.props.usuarios}
        edited={this.props.usuario}
        schema={schema}
        reducer={reducer}
      />
    );
  }
}

const mapStateToProps = state => ({
  usuarios: state.usuarios.usuarios,
  usuario: state.usuarios.usuario
});

export default connect(mapStateToProps, null)(Usuarios);
