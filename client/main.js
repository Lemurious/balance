import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import Navigation from './components/navigation/navigation.js';
import Content from './components/content/content.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Navigation />
        <Content />
      </div>
    )
  }
}

main();

function main() {
  ReactDOM.render(<App />, document.getElementById('app'));
}
