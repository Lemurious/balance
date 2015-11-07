import React from 'react';
import AppBar from 'material-ui/lib/app-bar'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menu/menu-item'

var Controls = React.createClass({
  getInitialState: function() {
    return {
      data: [
        { text: 'History' },
        { text: 'Budgets' },
        { text: 'Goals' }
      ]
    };
  },
  onHeaderClick: function() {
    this.refs.leftNav.toggle()
  },
  render: function() {
    return (
      <div id="controls">
        <AppBar
          title="Balance"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onClick={this.onHeaderClick} />
        <LeftNav
            ref="leftNav"
            menuItems={this.state.data}
            docked={false} />
      </div>
    )
  } 
})

module.exports = Controls
