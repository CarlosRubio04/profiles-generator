import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import firebase from "../firebase";

import Modal from "./Modal";

const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

function SingInModal(props) {
  const { signInWithGoogle } = this.props;
  return (
    <Modal isOpen={props.isOpen}>
      <div className="SingInModal">
        <h1>Please Sing IN</h1>
        <p>To save data you have to sing in</p>
        <button
          className="Text-Button Button Button-Secondary-Dark"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
        <div />
      </div>
    </Modal>
  );
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth
  })(SingInModal);
