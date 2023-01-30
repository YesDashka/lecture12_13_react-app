import React from "react";
import Calculator from "./Calculator";
import {Box} from "@mui/material";


class HistorableCalculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: []
        }
    }

    onAdd = (value) => {
        this.setState({
            history: [value, ...this.state.history]
        })
    }

    onAddAll = (values) => {
        this.setState({
            history: [...values, ...this.state.history]
        })
    }

    render() {
        return (
            <>
                <Box mb={2}
                     display="flex"
                     flexDirection="column"
                     height="300px"
                     style={{
                         overflow: "hidden",
                         overflowY: "scroll"
                     }}
                     className={"history-container"}
                >
                    {this.state.history[0] && <div className={"first-history-element"}>{this.state.history[0]}</div>}
                    {this.state.history.slice(1, this.state.history.length).map(s => (
                            <div key={s} className={"history-element"}>{s}</div>
                        )
                    )}
                </Box>
                <Calculator onAdd={this.onAdd} onAddAll={this.onAddAll}/>
            </>
        )
    }
}

export default HistorableCalculator;