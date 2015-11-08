import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './components/controls/controls.js';
import Content from './components/content/content.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CircularProgress from 'material-ui/lib/circular-progress';
import Avatar from 'material-ui/lib/avatar';
import './main.css';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import BalanceTheme from './theme.js';

import Models from './models/';

injectTapEventPlugin();

var app = {
  Models: Models
}

// debug TODO remove me
window.app = app;

var App = React.createClass({
  //the key passed through context must be called "muiTheme"
  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(BalanceTheme),
    };
  },

  getInitialState: function() {
    return {
      ready: false,
      data: {}
    }
  },

  loadData: function() {
    $.ajax({
      url: '/api/initial-data',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data)
        this.setState({
          data: data,
          ready:true
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err)
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadData();
    setInterval(this.loadData, 20000);
  },

  render: function() {
    var content
    if (!this.state.ready) {
      content = (
        <span className="loader">
          <CircularProgress mode="indeterminate" />
        </span>
      )
    } else {
      var accountsBalance = [];
      this.state.data.accounts.forEach(function(item) {
        accountsBalance.push(item.balance)
      })
      var overallBalance = accountsBalance.reduce(function(previous, current) {
        return previous + current;
      })
      content = (
        <span>
          <span className="account-info">
            <span className="avatar">
              <Avatar className="avatar-image" src="assets/images/avatar_mr.png" />
            </span>
            <span className="name">
              <span className="firstName">
                {this.state.data.user.firstName}
              </span>
              &nbsp;
              <span className="lastName">
                {this.state.data.user.lastName}
              </span>
              <span className="overall-balance">
                {overallBalance} EUR
              </span>
            </span>
          </span>
          <Content transactions={this.state.data.transactions}/>
        </span>
      )
    }
    return (
      <div className="app">
        <Controls />
        {content}
      </div>
    )
  }
})

main();

function main() {
  google.load("visualization", "1", {
    packages: ['corechart', 'bar'],
    callback: function() {
      ReactDOM.render(<App />, document.getElementById('app'));
    }
  });
}
