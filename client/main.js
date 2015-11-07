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
        <Content />
      </div>
    )
  }
})

main();

function main() {
  ReactDOM.render(<App />, document.getElementById('app'));
}
