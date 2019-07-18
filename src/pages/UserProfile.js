import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import firebase from "../firebase";

import UserData from '../components/UserData';

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
    this.isLogged();
  }

  isLogged = () => {
    if (firebaseAppAuth.currentUser) {
      this.setState({ loading: false, error: null });
      console.log(firebaseAppAuth)
    } else {
      this.setState({ loading: true, error: null });
      console.log(firebaseAppAuth)
    }
  };

  render() {
    const { user } = this.props;

    if (this.state.loading) {
      return <h1 className="Color-Primary">Loading ...</h1>;
    }
    if (this.state.error) {
      return <h1 className="Color-Primary">{this.state.error}</h1>;
    }
    return (
        <div className="Main Profile">
            <div className="MainContainer">
                <div className="Row FlexBetween">
                    <div className="Col4">
                        {
                            user ?
                            <UserData
                                name={user.displayName}
                                email={user.email}
                                picture={user.photoURL}
                            />
                            :
                            <h1>hola</h1>
                        }
                    </div>
                    <div className="Col8">
                        Hola
                    </div>
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
