import React, {Component} from 'react';
import BoilingVerdict from "../components/BoilingVerdict";
import TemperatureInput from "../components/TemperatureInput";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
        }

    }


    render() {
        return (
            <>
                <TemperatureInput scale='c'/>
                <TemperatureInput scale='f'/>
                <BoilingVerdict celsius={parseFloat(0)}/>
            </>
        );
    }
}

export default Calculator;