import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.scss';

export default class Home extends Component {
    render() {
        return (
            <section className="Main AlignCenter Bg-Secondary-light">
                <div className="MainContianer">
                    <div className="Row">
                        <div className="Col">
                            <h1 className="h1">
                                Stair Lifts Feel The Freedom Of Your Home
                            </h1>
                            <p className="sub">Astronomy Binoculars A Great Alternative</p>
                        </div>
                        <div className="Col">
                            <Link className="Text-Button Button Button-Secondary-Dark" to="/dashboard">
                                Empieza Ahora
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}