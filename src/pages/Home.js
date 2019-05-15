import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.scss';

export default class Home extends Component {
    render() {
        return (
            <section className="Main Bg-Secondary">
                <div className="Main-Contianer">
                    <div className="Row">
                        <div className="Col">
                            <h1 className="h1">
                                Welcome
                            </h1>
                        </div>
                        <div className="Col Flex-Center">
                            <Link className="Text-Button Button Button-Secondary-Dark" to="/dashboard">
                                Start
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}