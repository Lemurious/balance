import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './components/controls/controls.js';
import Content from './components/content/content.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CircularProgress from 'material-ui/lib/circular-progress';
import './main.css';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import BalanceTheme from './theme.js';

injectTapEventPlugin();

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
      ready: false
    }
  },
  loadData: function() {
    $.ajax({
      url: '/api/all-data.js',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ready:true})
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
      content = (
        <span>
          <span className="account-info">
            <span className="name">
              <span className="firstName">
                
              </span>
              &nbsp;
              <span className="lastName">
                
              </span>
            </span>
          </span>
          <Content />
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
  ReactDOM.render(<App />, document.getElementById('app'));
}
