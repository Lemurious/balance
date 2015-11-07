import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './components/controls/controls.js';
import Content from './components/content/content.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './main.css';

injectTapEventPlugin();

var App = React.createClass({
  render() {
    return (
      <div className="app">
        <Controls />
        <span className="account-info">
          <span className="name">
            <span className="firstName">
              {api.user.firstName}
            </span>
            &nbsp;
            <span className="lastName">
              {api.user.lastName}
            </span>
          </span>
        </span>
        <Content />
      </div>
    )
  }
})

main();

function main() {
  ReactDOM.render(<App />, document.getElementById('app'));
}
