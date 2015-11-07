import React from 'react';
import LinearProgress from 'material-ui/lib/linear-progress'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import moment from 'moment'

var Content = React.createClass({
  render: function() {
    var transactions = this.props.transactions.slice(0, 5)
    var transactionList = transactions.map(function(item) {
      return (
        <ListItem
          primaryText={item.description}
          secondaryText={
            <span>{item.amount} {item.currency}</span>
          } />
      );
    });
    return (
      <div id="content">
        <div id="history">
          <h1>History</h1>
          <List>
            {transactionList}
          </List>
        </div>
        <div id="budgets">
          <h1>Budgets</h1>
          <h2>{moment().format('MMMM YY')}</h2>
          <label>Total</label>
          <LinearProgress mode="determinate" value={60} />
        </div>
        <div id="goals">
          <h1>Goals</h1>
        </div>
      </div>
    )
  }
})

module.exports = Content
