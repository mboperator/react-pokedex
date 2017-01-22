import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const SearchInput = (props) => (
  <div>
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={({ target }) => props.onChange(target.value)}
    />
    <button>
      Submit
    </button>
  </div>
);

const PokemonViewer = (props) => (
  <div style={{ height: 600 }}>
    <img
      src={props.imageUrl}
      style={{ height: 300, width: 300 }}
    />
    <h1>{props.name} - {props.number}</h1>

  </div>
);

const searchStyle = { height: 600 };

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      currentPokemon: {
        name: 'pikachu',
        number: 25,
        imageUrl: "http://vignette4.wikia.nocookie.net/pokemon/images/5/5f/025Pikachu_OS_anime_11.png/revision/latest?cb=20150717063951"
      }
    };
  }

  findPokemon = searchQuery => {
    // Hit the API
    // Take API Response - Deserialize
    // Update the State
  }

  render() {

    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={searchStyle}>
          <img src={logo} alt="logo" />
          <SearchInput
            placeholder="Find a pokemon"
            onChange={query => this.setState({ searchQuery: query })}
            value={this.state.query}
            onSubmit={(searchQuery) => this.findPokemon(searchQuery)}
          />
        </div>
        <div style={{ }}>
          <PokemonViewer
            imageUrl={this.state.currentPokemon.imageUrl}
            number={this.state.currentPokemon.number}
            name={this.state.currentPokemon.name}
            weight=""
            height=""
          />
        </div>
      </div>
    );
  }
}

export default App;
