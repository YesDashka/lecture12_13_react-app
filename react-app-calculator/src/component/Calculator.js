import React from "react";
import store from "../store";
import {Button, Container, Input} from "@mui/material";
import array_utils from "../array_utils";
import TemplateCalculateButton from "./TemplateCalculateButton";


class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            out: '0'
        }
        this.refOutput = React.createRef()
    }

    onNumberClick(value) {
        let output = this.refOutput.current
        this.setState({
            out: value
        })

        if (output.value === '0') {
            output.value = ''
        }
        output.value += value
    }

    onArithmeticOperationClick(value) {
        let output = this.refOutput.current
        this.setState({
            out: value
        })

        const countOfArithmeticOperations = Array.from(output.value).filter(s => store.arithmeticOperations.includes(s)).length
        if (countOfArithmeticOperations > 0) {
            this.onResultOperationClick("=")
            output.value += value
            return
        }

        output.value += value
    }


    onResultOperationClick(value) {
        let output = this.refOutput.current
        if (value === 'CE') {
            output.value.length === 1 ? output.value = '0' : output.value = output.value.substring(0, output.value.length - 1)
        } else if (value === 'C') {
            output.value = '0'
        } else if (value === '=') {
            let result = output.value + "="
            try {
                output.value = eval(output.value)
            } catch {
                output.value = 'error'
                setTimeout(() => {
                    output.value = '0'
                }, 700)
            } finally {
                result += output.value
                if (array_utils.has(store.arithmeticOperations, result)) {
                    this.props.onAdd(result)
                }
            }
        }
    }
    onGenerate(expressions) {
        this.props.onAddAll(expressions.map(s => s + "=" + eval(s)))
    }

    render() {
        return (
            <Container>
                <div className="container">
                    <div className="output">
                        <Input inputRef={this.refOutput} type="text" defaultValue={this.state.out}/>
                    </div>
                    <div className="buttons">

                        {store.numbers.map((item, index) => <Button
                            key={index}
                            onClick={() => this.onNumberClick(item)}
                        >
                            {item}
                        </Button>)}

                        {store.arithmeticOperations.map((item, index) => <Button
                                key={index}
                                onClick={() => this.onArithmeticOperationClick(item)}
                            >
                                {item}
                            </Button>
                        )}
                        {store.resultOperations.map((item, index) =>
                            <Button
                                key={index}
                                onClick={() => this.onResultOperationClick(item)}
                            >
                                {item}
                            </Button>)
                        }
                    </div>
                    <TemplateCalculateButton onGenerate={(results) => { this.onGenerate(results)}}></TemplateCalculateButton>
                </div>
            </Container>
        )
    }
}

export default Calculator;