import React, {Component} from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menu/menu-item'

var Navigation = React.createClass({
  getInitialState: function() {
    return {
      data: [
        {
           type: MenuItem.Types.LINK,
           payload: '#history',
           text: 'History'
        },
        {
           type: MenuItem.Types.LINK,
           payload: '#budgets',
           text: 'Budgets'
        },
        {
           type: MenuItem.Types.LINK,
           payload: '#goals',
           text: 'Goals'
        },
      ]
    };
  },
  render: function() {
    return (
      <LeftNav
        ref="leftNav"
        menuItems={this.state.data}
        docked={false} />
    )
  }
});

module.exports = Navigation
