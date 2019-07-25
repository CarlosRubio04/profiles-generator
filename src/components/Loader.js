import React from "react";
import "./styles/Loader.scss";

function Loader(props) {
  return (
    <div className="Loader">
      <div className="atom-spinner">
        <div className="spinner-inner">
          <div className="spinner-line" />
          <div className="spinner-line" />
          <div className="spinner-line" />
          <div className="spinner-circle">&#9679;</div>
        </div>
      </div>
      <div className="LoaderText">
          <span>{ props.message }</span>
      </div>
    </div>
  );
}

export default Loader;
