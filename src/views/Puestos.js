import React, { Component } from 'react'
import View from "./View";
import { connect } from "react-redux";

class Puestos extends Component {
    render() {
        return (
            <View title="Puestos" editable={true} headers={["Oferente", "Giro", "Tarifa"]} />
        )
    }
}

const mapStateToProps = state => ({
    puestos: state.puestos.puestos
});

export default connect(mapStateToProps, null)(Puestos);
