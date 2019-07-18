import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import firebase from "../firebase";

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import ProfileEdit from '../pages/ProfileEdit';
import UserProfile from '../pages/UserProfile';

const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

function App(props) {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
¡                   <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/profile/:profileId/edit" component={ProfileEdit} />
                    <Route exact path="/myprofile" render={() => (
                      props.user ? (
                        <UserProfile />
                      ) : (
                        <Redirect to="/" />
                      )
                    )}
                    />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);