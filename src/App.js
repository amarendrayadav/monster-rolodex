import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this); --> replaced by arrow function, no need to bind
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>
      response.json()).then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => { //if we are not using arrow function, we need to bind it as in line 14
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state; // destructuring
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
