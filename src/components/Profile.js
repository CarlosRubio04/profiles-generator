import React from 'react'
import './styles/Profile.scss'

function Profile(props) {
    return (
        <div className="ProfileContiner">
            <div className="ProfileHeader Bg-Secondary">
                <span> {props.profile.nivel} </span>
                <h2> {props.profile.cargo} </h2>
            </div>
            <div className="ProfileBody">
                <p> { props.profile.area } </p>
            </div>
        </div>
    )
}

export default Profile