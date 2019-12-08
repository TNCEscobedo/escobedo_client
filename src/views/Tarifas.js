import React, { Component } from 'react'
import View from "./View";
import { connect } from "react-redux";

const reducer = "TARIFAS";

class Tarifas extends Component {
    render() {
        return (
            <View title="Tarifas" reducer={reducer} editable={true} headers={["Superficie", "Monto"]} />
        )
    }
}

const mapStateToProps = state => ({
    tarifas: state.tarifas.tarifas,
    tarifa: state.tarifas.tarifas
})

export default connect(mapStateToProps, null)(Tarifas);