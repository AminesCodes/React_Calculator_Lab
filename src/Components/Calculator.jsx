import React from 'react';
import './Calculator.css';

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const division = (a, b) => a / b;

const doTheMath = (op, a, b) => {
    let result
    switch (op) {
        case '+':
            result = sum(parseFloat(a), parseFloat(b))
            break;
        case '-':
            result = sub(parseFloat(a), parseFloat(b))
            break;
        case 'x':
            result = mul(parseFloat(a), parseFloat(b))
            break;
        case '÷':
            result = division(parseFloat(a), parseFloat(b))
            break;
        default:
            result = null
            break;
    }
    return result
}

export default class Calculator extends React.Component {
    initialState = {
        displayValue: '0',
        previousValue: 0,
        operation: null,
        reset: 'AC',
        expectingNewValue: false
    }

    state = {...this.initialState}

    handleOperationBtn = event => {
        if (!this.state.expectingNewValue) {
            const arithmeticResult = doTheMath(this.state.operation, this.state.previousValue, this.state.displayValue);   
            this.setState({
                previousValue: this.state.displayValue,
                expectingNewValue: true
            })
            
            if (arithmeticResult) {
                this.setState({displayValue: arithmeticResult})
            }
        }
        this.setState({
            operation: event.target.innerText,
            reset: 'AC'
        })
    }

    handleNumericalBtn = event => {
        let screen = this.state.displayValue
        if (screen === '0' || this.state.expectingNewValue) {
            screen = event.target.innerText;
            if (this.state.expectingNewValue) {
                this.setState({
                    previousValue: this.state.displayValue,
                    expectingNewValue: false})
            }
        } else {
            screen += event.target.innerText
        }

        this.setState({
            displayValue: screen,
            reset: 'C'
        })
    }
    
    handleResultBtn = () => {
        let arithmeticResult = doTheMath(this.state.operation, this.state.previousValue, this.state.displayValue);
        if (!arithmeticResult) {
            arithmeticResult = this.state.displayValue;
        }

        this.setState(this.initialState);
        this.setState({
            displayValue: arithmeticResult,
            previousValue: 0,
            operation: null,
            reset: 'AC',
            expectingNewValue: true
        })
    }

    handleResetBtn = event => {
        if (event.target.innerText === 'C') {
            this.setState({displayValue: '0'})
        } else {
            this.setState(this.initialState)
        }
    }

    handlePercentBtn = () => {
        this.setState({displayValue: parseFloat(this.state.displayValue)/100})
    }

    handleSwitchSignBtn = () => {
        this.setState({displayValue: parseFloat(this.state.displayValue)*(-1)})
    }

    //######################### RENDER ##########################
    render() {
        return(
            <div className='Calculator'>
                <div className='resultDiv'>{this.state.displayValue}</div>
                <div className='calculatorButtons'>
                    <button className='button' onClick={this.handleResetBtn}>{this.state.reset}</button>
                    <button className='button' onClick={this.handlePercentBtn}>%</button>
                    <button className='button' onClick={this.handleSwitchSignBtn}>±</button>
                    <button className='button orange' onClick={this.handleOperationBtn}>÷</button>
                    <button className='button' onClick={this.handleNumericalBtn}>7</button>
                    <button className='button' onClick={this.handleNumericalBtn}>8</button>
                    <button className='button' onClick={this.handleNumericalBtn}>9</button>
                    <button className='button orange' onClick={this.handleOperationBtn}>x</button>
                    <button className='button' onClick={this.handleNumericalBtn}>4</button>
                    <button className='button' onClick={this.handleNumericalBtn}>5</button>
                    <button className='button' onClick={this.handleNumericalBtn}>6</button>
                    <button className='button orange' onClick={this.handleOperationBtn}>-</button>
                    <button className='button' onClick={this.handleNumericalBtn}>1</button>
                    <button className='button' onClick={this.handleNumericalBtn}>2</button>
                    <button className='button' onClick={this.handleNumericalBtn}>3</button>
                    <button className='button orange' onClick={this.handleOperationBtn}>+</button>
                    <button id='zeroButton' className='button' onClick={this.handleNumericalBtn}>0</button>
                    <button className='button' onClick={this.handleNumericalBtn}>.</button>
                    <button className='button orange' onClick={this.handleResultBtn}>=</button>
                </div>
            </div>
        )
    }
}