import React from "react";
import './buttonlink.css';


export default function ButtonLink(props) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="btn">
      <button className="b"
        role="link"
        onClick={() => openInNewTab(props.lin)}
      >
        Demo
      </button>
    </div>
  );
}
