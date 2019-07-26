import React from 'react';
import firebase from "../firebase";

import Profile from './Profile';
import Loader from './Loader';


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

    fetchData = async () => {
        this.setState({ loading: true, error: null });
        
        try {
        console.log(this.props.userId);
          const REF = firebase.database().ref("users/" + this.props.userId + "/Collections");
    
          REF.once("value")
            .then(snaptshot => {
                console.log(snaptshot.val())
                this.setState({
                    loading: false,
                    data: Object.values(snaptshot.val())
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
        if(this.state.loading) {
            return(
                <Loader message={'Loading ...'}/>
            )
        }
        
        if(this.state.error | this.state.data == null) {
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
