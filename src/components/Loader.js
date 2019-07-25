import React from "react";
import "./styles/Loader.scss";

function Loader(props) {
  return (
    <div className="Loader">
      <div class="atom-spinner">
        <div class="spinner-inner">
          <div class="spinner-line" />
          <div class="spinner-line" />
          <div class="spinner-line" />
          <div class="spinner-circle">&#9679;</div>
        </div>
      </div>
      <div className="LoaderText">
          <span>{ props.message }</span>
      </div>
    </div>
  );
}

export default Loader;
