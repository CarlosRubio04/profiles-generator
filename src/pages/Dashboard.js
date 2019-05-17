import React, { Component } from 'react';

import Images from '../components/Images';


export default class Dashboard extends Component {
    render() {
        return (
            <section className="Main">
                <div className="Main-Container">
                    <div className="Row">
                        <Images></Images>
                    </div>
                </div>
            </section>
        )
    }
}