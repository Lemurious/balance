import React from 'react';
import LinearProgress from 'material-ui/lib/linear-progress'
import moment from 'moment'

var Content = React.createClass({
  render: function() {
    var currentMonth = 'November';

    return (
      <div id="content">
        <div id="history">
          <h1>History</h1>
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
