import React from 'react';

import './styles/UserData.scss';

function UserData(props) {
    return (
        <div className="User">
            <div className="UserContainer">
                <div className="UserPicture">
                    <img src={props.picture} alt="Pic" />
                </div>
                <div className="UserData">
                    <p> {props.name} </p>
                    <p> {props.email} </p>
                </div>
            </div>
        </div>
    )
}

export default UserData;