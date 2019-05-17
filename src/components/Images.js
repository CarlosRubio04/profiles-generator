import React from 'react';
import firebase from '../firebase';
import { async } from 'q';

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
        // const REF = firebase.database().ref('images');
        // REF.on('value', (snaptshot) => {
        //     let data = snaptshot.val();
        //     console.log(data);
        // })

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
            <div>
               {this.state.data.map(item => {
                    return (
                        <h1 className="Color-Primary" key={item.id}>
                            {item.url}
                        </h1>
                    )
                })} 
            </div>
            
        )
    }
}

export default Images