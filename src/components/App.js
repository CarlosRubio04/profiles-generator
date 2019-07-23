import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import ProfileEdit from '../pages/ProfileEdit';
import UserProfile from '../pages/UserProfile';



function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
¡                   <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/profile/:profileId/edit" component={ProfileEdit} />
                    <Route exact path="/myprofile" component={UserProfile}/>
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;