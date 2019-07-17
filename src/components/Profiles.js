import React from "react";
import firebase from "../firebase";

import Profile from "./Profile";

import "./styles/Profiles.scss";

class Profiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: undefined,
      error: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true, error: null });

    const REF = firebase.database().ref("profiles");

    REF.once("value")
      .then(snaptshot => {
        this.setState({
          loading: false,
          data: Object.values(snaptshot.val())
        });
      })
      .catch(error => {
        this.setState({ loading: false, error: error });
      });
  };

  render() {
    if (this.state.loading) {
      return <h1 className="Color-Primary">Loading ...</h1>;
    }

    if (this.state.error) {
      return <h1 className="Color-Primary">{this.state.error}</h1>;
    }

    return (
      <div className="DashBoard">
        <div className="SubHeader Bg-Secondary">
          <div className="SubHeaderContainer">
            <h2>How Great Is The Strength Of Your Belief</h2>
          </div>
        </div>
        <div className="Row FlexCenter">
          <div className="ProfilesContainer">
            {this.state.data.map(item => {
              return <Profile key={item.id} profile={item} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Profiles;
