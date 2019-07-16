import React from 'react'
import { Link } from 'react-router-dom';

import './styles/Profile.scss'

function Profile(props) {
    return (
        <Link to={`/profile/${props.profile.id}/edit`}>
            <div className="ProfileContiner" >
                <div className="ProfileHeader Bg-Secondary">
                    <span> {props.profile.nivel} </span>
                    <h2> {props.profile.cargo} </h2>
                </div>
                <div className="ProfileBody">
                    <p> { props.profile.area } </p>
                </div>
            </div>
        </Link>
    )
}

export default Profile