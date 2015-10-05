var React = require('react');
var Header = require('./components/Header.jsx');
var Pokedex = require("./components/Pokedex.jsx");
var Buttons = require("./components/Buttons.jsx");

var App = React.createClass({
  render: function() {
    return(
      <main>
        <Header />
        <Pokedex />
        <Buttons />
      </main>
    )
  }
})

React.render(<App />, document.body)
