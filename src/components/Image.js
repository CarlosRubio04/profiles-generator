import React from 'react'
import './styles/Image.scss'

function Images(props) {
    return (
        <div className="ImageContiner">
            <figure>
                <img src={props.image.url} className="Image" alt="Pic" />
                <figcaption>
                    <small> { props.image.title } </small>
                </figcaption>  
            </figure>
            
        </div>
    )
}

export default Images