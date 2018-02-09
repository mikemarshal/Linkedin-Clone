import React, { Component } from 'react';
import './App.css';
import data from './data';
import Profile from './components/profile.js';

class App extends Component {
  state = data;
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="logo" src={require("./assets/logo.png")} alt="logo"/>
          <form className="Search-Form">
            <input type="image" className="Search-Image" src={require("./assets/search.png")} id="search" alt="search"/>
            <input className="Search-Input"
              type="text"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="App-profileBox">
        {
          this.state.map(profile1 => {
            return <Profile
              profile={profile1}
            />;
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
