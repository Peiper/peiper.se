import React from 'react';
import './MoneyPage.css';

export class MoneyPage extends React.Component {

  constructor() {
    super();

    this.valueChange = this.handleValueChange.bind(this);

    this.state = { moneyPerDay: 0 };
  }

  handleValueChange(e) {
    const money = e.target.value;
    const today = new Date();
    const payDay = new Date(today.getFullYear(), today.getMonth(), 25).getDay();
    var dim = 25;
    if(payDay === 0){
      dim = 23;
    } else if(payDay === 6) {
      dim = 24;
    }
    
    const moneyPerDay = money / (dim - today.getDate());

    this.setState({ moneyPerDay });
  }

  render() {
    return (
      <div className="container">
        <div>
          <label htmlFor="money"><strong>Money: </strong></label>
          <input id="money" type="number" onChange={this.valueChange} />
        </div>
        <div>
          <h1>Money per day: </h1>
          <h1>{this.state.moneyPerDay}</h1>
        </div>
      </div>
    );
  }
}
export default MoneyPage;

