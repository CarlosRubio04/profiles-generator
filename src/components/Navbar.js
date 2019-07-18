import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import firebase from "../firebase";

import { Link } from "react-router-dom";

import "./styles/Navbar.scss";

const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

class Navbar extends React.Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <div className="Navbar Bg-Primary">
        <div className="Navbar-Container">
          <Link to="/" className="Body-1">
            Acsendo<span>Profiles</span>
          </Link>
          <div className="User">
            {user ? <p className="Body-1">Hello, {user.displayName}</p> : <p className="Body-1">Please sign in</p>}
            {user ? (
              <button className="Text-Button Button Button-Secondary-Dark" onClick={signOut}>Sign out</button>
            ) : (
              <button className="Text-Button Button Button-Secondary-Dark" onClick={signInWithGoogle}>Sign in with Google</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Navbar);
