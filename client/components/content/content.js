import React from 'react';
import LinearProgress from 'material-ui/lib/linear-progress'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import {Pie} from 'react-chartjs';
import BudgetsView from './budgets/budgets_view.js';

var Content = React.createClass({
  render: function() {
    var pieData = [
      {
        value: 100,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Rent"
      },
      {
        value: 70,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Food"
      },
      {
        value: 50,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Clothes"
      },
      {
        value: 30,
        color: "#949494",
        highlight: "#C4C4C4",
        label: "Cinema"
      }
    ]
    var transactions = this.props.transactions.slice(0, 5)
    var transactionList = transactions.map(function(item) {
      var secondaryTextClass = item.amount > 0 ? 'pos' : 'neg';
      return (
        <ListItem
          primaryText={item.description}
          secondaryText={
            <span className={secondaryTextClass}>
              {item.amount} {item.currency}
            </span>
          } />
      );
    });
    return (
      <div id="content">
        <div id="history">
          <h1>History</h1>
          <div className="pie-wrapper">
            <Pie data={pieData} />
          </div>
          <List>
            {transactionList}
          </List>
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
