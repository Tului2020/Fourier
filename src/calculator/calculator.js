import React from 'react'
import './calculator.css';
import Algebrite from 'algebrite'



class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { equation: '' }
    this.updateEquation = this.updateEquation.bind(this)
  }

  render() {
    return (
      <div>
        <div id='result'>No Equation</div>
        <input placeholder={'x + x'} className='equation' onChange={this.updateEquation} />
        <div>
          <input placeholder={'Lower Limit'} className='equation' />
          <input placeholder={'Upper Limit'} className='equation' />
        </div>
      </div>
    )
  }

  updateEquation(event) {
    let equation = event.target.value
    this.setState({ equation })

    let resultElement = document.getElementById('result')
    if (!event.target.value) {
      resultElement.innerHTML = 'No Equation'
    } else {
      resultElement.innerHTML = Algebrite.run(equation)
    }
  }





}

export default Calculator;


