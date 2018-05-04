import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './reset.css';
import './App.css';

import routes from './routes';
import Tray from './components/Tray/Tray';

class App extends Component {
  state = {
    tray: 'tray-closed'
  }

  handleTray() {
    this.state.tray === 'tray-closed'
      ? this.setState({ tray: 'tray-open' })
      : this.setState({ tray: 'tray-closed' })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Link to='create-character'><button className='App-create-button'>Create a combatant</button></Link>
          <h1>SUPER SMASH ROBROS</h1>
          <div>
            <Link to='battle'><button className='App-battle-button'>BATTLE</button></Link>
            <Link to='help'><button>?</button></Link>
          </div>
        </header>
        {routes}
        <Tray tray={this.state.tray} handleTray={() => this.handleTray()} />
      </div>
    );
  }
}

export default App;
