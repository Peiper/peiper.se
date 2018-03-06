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
    const dim = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    const moneyPerDay = money / (dim - today.getDate());

    this.setState({ moneyPerDay });
  }

  render() {
    return (
      <div className="wrapper">
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
      </div>
    );
  }
}
export default MoneyPage;

