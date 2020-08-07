import React, {Component} from 'react';

const scaleName = {
    c: 'Цельсий',
    f: 'Фаренгейт',
}


class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            temperature: event.target.value
        })
    }

    render() {
        const {temperature} = this.state;
        const {scale} = this.props;
        return (
            <fieldset>
                <legend>Введите температуру по {scaleName[scale]}</legend>
                <input type="text" value={temperature} onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

export default TemperatureInput;