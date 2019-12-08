import React from 'react'
import Card from "react-bootstrap/Card";

export default props => (
    <Card className="p-3 rounded border-0 shadow">
        {props.children}
    </Card>
);