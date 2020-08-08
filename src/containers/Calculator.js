import React, {Component} from 'react';
import BoilingVerdict from "../components/BoilingVerdict";
import TemperatureInput from "../components/TemperatureInput";
import {toCelsius, tryConvert, toFahrenheit} from "../_helpers/convert";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: '',
            temperature: '',
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(event) {
        this.setState({
            scale: 'c',
            temperature: event.target.value
        });
    }
    handleFahrenheitChange(event) {
        this.setState({
            scale: 'f',
            temperature: event.target.value
        });
    }



    render() {
        const {scale, temperature} = this.state;
        const celsius = scale == 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const faringate = scale == 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <>
                <TemperatureInput
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale='f'
                    temperature={faringate}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict celsius={temperature}/>
            </>
        );
    }
}

export default Calculator;