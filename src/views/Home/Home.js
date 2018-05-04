import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='home'>
                <h1>Welcome to Super Smash Robros</h1>
                <p>Use the links above to navigate the site</p>
            </div>
        )
    }
}

export default Home;