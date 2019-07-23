import React from 'react';
import firebase from "../firebase";

import Profile from './Profile';


class UserCollection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            data: undefined,
            error: null
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        this.setState({ loading: true, error: null });

        const REF = firebase.database().ref('profiles');
            
        REF.once('value').then((snaptshot) => {
            this.setState({
                loading: false,
                data: Object.values(snaptshot.val()) 
            })
        }).catch((error) => {
            this.setState({ loading: false, error: error})
        })
        
    }

    render() {
        if(this.state.loading) {
            return(
                <h1 className="Color-Primary">Loading ...</h1>
            )
        }
        
        if(this.state.error) {
            return(
                <h1 className="Color-Primary">{this.state.error}</h1>
            )
        }

        return(
            <div className="DashBoard">
                <div className="Row FlexCenter">
                    <div className="ProfilesContainer">
                        {
                            this.state.data.map(item => {
                                return (<Profile key={item.id} profile={item} />)
                            })
                        } 
                    </div>
                </div>
            </div>
        )
    }
}


export default UserCollection;
