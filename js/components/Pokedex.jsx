var React = require('react');
var request = require('superagent');

var Pokedex = React.createClass({

getInitialState: function() {
  return{
    index: 1,
    pokemon:'',
    species:'',
  }
},

  componentDidMount:function() {
    request
      .get('http://pokeapi.co/api/v1/pokemon/' + this.state.index)
      .end(function(err, res) {
        if (err) return console.log(err);
        console.log(res.body.pokemon)
        this.setState({
          pokemon: res.body.name,
          species: res.body.species
        })
      }.bind(this))
  },

  render: function() {
    return (
      <section id="display">
        <p> <img src={"http://pokeapi.co/media/img/" + this.state.index + ".png"} /> </p>
        <p> {this.state.pokemon} </p>
        <p> {this.state.species} </p>
      </section>
    );
  }

})

module.exports= Pokedex;
