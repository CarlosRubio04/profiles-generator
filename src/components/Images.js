import React from 'react';
import firebase from '../firebase';

import Image from './Image';

import './styles/Images.scss';

class Images extends React.Component {
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

        const REF = firebase.database().ref('images');
            
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
            <div className="ImagesContainer">
               {this.state.data.map(item => {
                    return (
                        <Image key={item.id} image={item} />
                    )
                })} 
            </div>
            
        )
    }
}

export default Images