import React from 'react'
import './calculator.css';
import Algebrite from 'algebrite'



class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { equation: 'x', lowerLimit: -5, upperLimit: 5 }
    this.updateEquation = this.updateEquation.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  render() {
    return (
      <div>
        <div id='result'>No Equation</div>
        <input value={this.state.equation} className='equations' id='equation' onChange={this.updateState}/>
        <div className='limits'>
          <div id='lower-limit'>
            Lower Limit <input value={this.state.lowerLimit} className='equation' id='lowerLimit' onChange={this.updateState}/>
          </div>
          <div id='upper-limit'>
            Upper Limit <input value={this.state.upperLimit} className='equation' id='lowerLimit'onChange={this.updateState}/>
          </div>
        </div>
        <button onClick={this.updateEquation}>Update</button>
      </div>
    )
  }

  updateState(event) {
    let stateToChange = event.target.id
    let newValue = event.target.value
    this.setState({[stateToChange]: newValue})
  }


  updateEquation() {
    let equation = document.getElementById('equation').value
    let resultElement = document.getElementById('result')

    if (!equation) {
      resultElement.innerHTML = 'No Equation'
    } else {
      resultElement.innerHTML = Algebrite.defint(Algebrite.run(equation), 'x', 0, 10)
    }
  }





}

export default Calculator;


