import React from 'react';
import AppBar from 'material-ui/lib/app-bar'
import LeftNav from 'material-ui/lib/left-nav'

var Controls = React.createClass({
  getInitialState: function() {
    return {
      data: [
        {
          text: 'History'
        },
        {
          text: 'Budgets'
        },
        {
          text: 'Goals'
        }
      ]
    };
  },
  onHeaderClick: function() {
    this.refs.leftNav.toggle()
  },
  onNavClick: function(e) {
    console.log(e)
  },
  render: function() {
    return (
      <div id="controls">
        <AppBar
          title="Balance"
          iconClassNameLeft="logo"
          onClick={this.onHeaderClick} />
        <LeftNav
            ref="leftNav"
            menuItems={this.state.data}
            docked={false}
            onClick={this.onNavClick} />
      </div>
    )
  } 
})

module.exports = Controls
