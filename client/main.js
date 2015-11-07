import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import Navigation from './components/navigation/navigation.js';
import Content from './components/content/content.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import BalanceTheme from './theme.js';

injectTapEventPlugin();
console.log(Navigation)

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
        <Header />
        <Navigation />
        <Content />
      </div>
    )
  }
})

main();

function main() {
  ReactDOM.render(<App />, document.getElementById('app'));
}
