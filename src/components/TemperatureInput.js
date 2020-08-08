import React, {Component} from 'react';

const scaleName = {
    c: 'Цельсий',
    f: 'Фаренгейт',
}


class TemperatureInput extends Component {

    render() {
        const {scale, temperature, onTemperatureChange} = this.props;
        return (
            <fieldset>
                <legend>Введите температуру по {scaleName[scale]}</legend>
                <input type="text" value={temperature} onChange={onTemperatureChange}/>
            </fieldset>
        );
    }
}

export default TemperatureInput;