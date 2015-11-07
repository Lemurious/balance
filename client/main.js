import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './components/controls/controls.js';
import Content from './components/content/content.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
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

  render() {
    return (
      <div className="app">
        <Controls />
        <Content />
      </div>
    )
  }
})

main();

function main() {
  ReactDOM.render(<App />, document.getElementById('app'));
}
