var React = require('react');
var Header = require('./components/Header.jsx');

var App = React.createClass({
  render: function() {
    return(
      <main>
        <Header />
      </main>
    )
  }
})

React.render(<App />, document.body)
