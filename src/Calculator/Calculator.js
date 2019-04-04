import React from 'react';


class Calculator extends React.Component {


    state = {
        number1: this.props.number,
        number2: this.props.number,
        result: this.props.result,
    }

    nameChangeHandler1 = (event) => this.setState({
        number1: parseInt(event.target.value),
    })

    nameChangeHandler2 = (event) => this.setState({
        number2: parseInt(event.target.value),
    })

    add = () => this.setState({result: this.state.number1 + this.state.number2})
    subtract =() => this.setState({result: this.state.number1 - this.state.number2})
    multiply = () => this.setState({result: this.state.number1 * this.state.number2})
    divide = () => this.setState({result: this.state.number1 / this.state.number2})
    

    render() {
        return (
            <div>
                <input
                    type={'number'} 
                    value={this.state.number1}
                    onChange={this.nameChangeHandler1}
                />
                <input
                    type={'number'}
                    value={this.state.number2}
                    onChange={this.nameChangeHandler2}
                />

                <h1>
                    {this.state.result}
                </h1>

                <button
                    onClick={this.add}
                >
                    +
                </button>

                <button
                    onClick={this.subtract}
                >
                    -
                </button>

                <button
                    onClick={this.multiply}
                >
                    *
                </button>

                <button
                    onClick={this.divide}
                >
                    /
                </button>

            </div>
        )
    }
}

Calculator.defaultProps = {
    number1: 0,
    number2: 0,
    result: null,
}



export default Calculator;