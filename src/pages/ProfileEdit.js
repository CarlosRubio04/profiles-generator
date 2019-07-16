import React from 'react';

import firebase from '../firebase';

class ProfileEdit extends React.Component {
    state = {
        loading: true,
        error: null
    };

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        this.setState({ loading: true, error: null });
        const PROFILE_ID = this.props.match.params.profileId;
        const REF = firebase.database().ref('profiles/' + PROFILE_ID);
            
        REF.once('value').then((snaptshot) => {
            this.setState({
                loading: false,
                data: snaptshot.val() 
            })
        }).catch((error) => {
            this.setState({ loading: false, error: error})
        })
        
    };

    render() {
        if (this.state.loading) {
            return (<h1 className="Color-Primary">Loading ...</h1>)
        }

        if(this.state.error) {
            return(
                <h1 className="Color-Primary">{this.state.error}</h1>
            )
        }

        return (<h1 className="Color-Primary">Hola ...</h1>)
    }
}

export default ProfileEdit;