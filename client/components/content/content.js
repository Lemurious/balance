import React from 'react';
import BudgetsView from './budgets/budgets.js';


var Content = React.createClass({
  render: function() {
    console.log(this.props.transactions)
    return (
      <div id="content">
        <div id="history">
          <h1>History</h1>
        </div>
        <div id="budgets">
          <h1>Budgets</h1>
          <BudgetsView />
        </div>
        <div id="goals">
          <h1>Goals</h1>
        </div>
      </div>
    )
  }
})

module.exports = Content
