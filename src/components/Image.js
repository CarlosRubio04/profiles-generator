import React from 'react'

function Images(props) {
    return (
        <img src={props.image.url} className="Image" />
    )
}

export default Images