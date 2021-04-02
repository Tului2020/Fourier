import React from 'react'
import './calculator.css';
import Algebrite from 'algebrite'



class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { equation: 'x', limit: 5, n: 4}
    this.updateEquation = this.updateEquation.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  render() {
    return (
      <div>
        <div id='equation-confirmation'>No Equation</div>
        <input value={this.state.equation} className='equations' id='equation' onChange={this.updateState}/>
        <div className='limits'>
        <div id='lower-limit'>
            Limit <input value={this.state.limit} className='equation' id='limit' onChange={this.updateState}/>
          </div>
          <div id='lower-limit'>
            N <input value={this.state.n} className='equation' id='n' onChange={this.updateState}/>
          </div>
        </div>
        <button onClick={this.updateEquation}>Update</button>
        <div id='result'></div>
      </div>
    )
  }

  updateState(event) {
    let stateToChange = event.target.id
    let newValue = event.target.value
    this.setState({[stateToChange]: newValue})
  }


  updateEquation() {
    let { equation, limit, n } = this.state
    let resultElement = document.getElementById('equation-confirmation')

    if (!equation) {
      resultElement.innerHTML = 'No Equation'
    } else {
      resultElement.innerHTML = Algebrite.run(equation)
      // Algebrite.defint(Algebrite.run(equation), 'x', lowerLimit, upperLimit)
    }

    let constA = [];
    let constB = [];

    for (let i = 0; i < n; i ++) {
      
    }



    // this.updateResult(['dsadas'], ['dasda'])
  }

  updateResult(a, b) {

    let resultElement = document.getElementById('result')
    while (resultElement.firstChild) {
      resultElement.firstChild.remove()
    }


    a.forEach(el => {
      let divComp = document.createElement('div')
      divComp.innerHTML = el
      resultElement.appendChild(divComp)
    })

    b.forEach(el => {
      let divComp = document.createElement('div')
      divComp.innerHTML = el
      resultElement.appendChild(divComp)
    })

  }





}

export default Calculator;


