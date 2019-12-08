import React, { Component } from "react";
import View from "./View";
import UsuariosService from "../services/UsuariosService";
import { selectTab } from "../actions/menuActions";
import { connect } from "react-redux";

const reducer = "USUARIOS";

const schema = {
  idUsuario: "nuevo",
  correo: "",
  uid: "",
  tipo: ""
};

const tipos = [
  {
    name: "Regular",
    value: 1
  },
  {
    name: "Admin",
    value: 2
  },
  {
    name: "Inspector",
    value: 3
  },
  {
    name: "Autoriza",
    value: 4
  }
];

class Usuarios extends Component {
  componentDidMount() {
    this.props.selectTab(reducer.toLowerCase());
  }

  renderUsuarios() {    
    if (this.props.usuarios)
      return this.props.usuarios.map(usuario => ({
        ...usuario,
        tipo: parseInt(usuario.tipo) === 1 ? "Regular" : usuario.tipo === 2 ? "Admin" : usuario.tipo === 3 ? "Inspector" : "Autoriza"
      }));
  }

  render() {
    return (
      <View
        title="Usuarios"
        editable={true}
        idFila="idUsuario"
        headers={["Nombre", "Correo", "Tipo"]}
        exclude={["idUsuario", "uid"]}
        rows={this.renderUsuarios()}
        edited={this.props.usuario}
        schema={schema}
        reducer={reducer}
        servicio={UsuariosService}
        options={{
          tipo: tipos
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  usuarios: state.usuarios.usuarios,
  usuario: state.usuarios.usuario
});

export default connect(mapStateToProps, { selectTab })(Usuarios);
