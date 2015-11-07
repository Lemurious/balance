import React from 'react';
import Header from './components/header/header.js';
import Navigation from './components/navigation/navigation.js';
import Content from './components/content/content.js';

class App extends React.Component {
  render() {
    return (
      <div class="app">
        <Header />
        <Navigation />
        <Content />
      </div>
    )
  }
}

main();

function main() {
  React.render(<App />, document.getElementById('app'));
}
