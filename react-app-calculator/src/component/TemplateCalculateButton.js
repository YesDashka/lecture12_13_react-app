import React from "react";
import {Button} from "@mui/material";

class TemplateCalculateButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expressions: []
        }
    }

    generateRandomCalculations() {
        return fetch("http://localhost:8080/math/examples?count=4")
            .then(s => s.json())
            .then(s => this.props.onGenerate(s))
            .catch(s => console.error(s))
    }

    render() {
        return (
            <Button onClick={() => {this.generateRandomCalculations()}}>Generate random calculations</Button>
        )
    }
}

export default TemplateCalculateButton;