import React, { Component } from "react";

import Profiles from "../components/Profiles";

export default class Dashboard extends Component {
  render() {
    return (
      <section className="Main">
        <div className="Row">
          <Profiles />
        </div>
      </section>
    );
  }
}
