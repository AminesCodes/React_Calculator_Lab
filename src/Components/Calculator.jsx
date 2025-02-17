import React from 'react';
import './Calculator.css';

import Btn from './Button'

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
        let btnValue = event.target.innerText;
        let screen = this.state.displayValue;

        if (btnValue === '.' && (screen === '0' || this.state.expectingNewValue)) {
            btnValue = '0.'
        }

        if (screen === '0' || this.state.expectingNewValue) {
            screen = btnValue;
            if (this.state.expectingNewValue) {
                this.setState({
                    previousValue: this.state.displayValue,
                    expectingNewValue: false
                })
            }
        } else {
            screen += btnValue
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
                    <Btn htmlClass='button' jsFunction={this.handleResetBtn} disValue={this.state.reset} />
                    <Btn htmlClass='button' jsFunction={this.handlePercentBtn} disValue='%' />
                    <Btn htmlClass='button' jsFunction={this.handleSwitchSignBtn} disValue='±' />
                    <Btn htmlClass='button orange' jsFunction={this.handleOperationBtn} disValue='÷' />
                    <Btn htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='7' />
                    <Btn htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='8' />
                    <Btn htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='9' />
                    <Btn htmlClass='button orange' jsFunction={this.handleOperationBtn} disValue='x' />
                    <Btn htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='4' />
                    <Btn htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='5' />
                    <Btn htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='6' />
                    <Btn htmlClass='button orange' jsFunction={this.handleOperationBtn} disValue='-' />
                    <Btn htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='1' />
                    <Btn htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='2' />
                    <Btn htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='3' />
                    <Btn htmlClass='button orange' jsFunction={this.handleOperationBtn} disValue='+' />
                    <Btn htmlId='zeroButton' htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='0' />
                    <Btn htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='.' />
                    <Btn htmlClass='button orange' jsFunction={this.handleResultBtn} disValue='=' />
                </div>
            </div>
        )
    }
}