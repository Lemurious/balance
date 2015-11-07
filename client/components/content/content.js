import React from 'react';

var Content = React.createClass({
  render: function() {
    return (
      <div id="content">
        <div id="history">
          <h1>History</h1>
        </div>
        <div id="budgets">
          <h1>Budgets</h1>
        </div>
        <div id="goals">
          <h1>Goals</h1>
        </div>
      </div>
    )
  } 
})

module.exports = Content
