import React from "react";

import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import firebase from "../firebase";

import UserCollection from '../components/UserCollection';
import UserData from "../components/UserData";

const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

class UserProfile extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {}
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const UID = firebaseAppAuth.currentUser.uid;
      const REF = firebase.database().ref("users/" + UID + "/colections");

      REF.once("value")
        .then(snaptshot => {
          this.setState({
            loading: false,
            data: snaptshot.val()
          });
        })
        .catch(error => {
          this.setState({ loading: false, data: {} });
        });
    } catch (error) {
      this.setState({ loading: false, data: {} });
    }
  };

  render() {
    const { user, signInWithGoogle } = this.props;

    if (this.state.loading) {
      return <h1 className="Color-Primary">Loading ...</h1>;
    }
    if (this.state.error) {
      return <h1 className="Color-Primary">{this.state.error}</h1>;
    }
    if (user) {
      return (
        <div className="Main Profile">
          <div className="Row FlexBetween">
            <div className="Col3">
              <UserData
                name={user.displayName}
                email={user.email}
                picture={user.photoURL}
              />
            </div>
            <div className="Col9 Bg-Primary-light">
              {
                this.state.data.lenght ? 'Hola' : <UserCollection />
              }
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="Main Profile">
        <div className="Row FlexCenter AlignCenter">
          <div className="Col4 FlexCenter">
            <button
              className="Text-Button Button Button-Secondary-Dark"
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </button>
          </div>
          <div className="Col8">

          </div>
        </div>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(UserProfile);
