import React from "react";
import "./Cards.css";

export default function Cardcomponent({
  title,
  subtitle,
  icon,
  sharetext,
  btn,
}) {
  return (
    <div className="card-main-wrapper">
      <div className="card-wrapper">
        <div className="card-content">
          <h1 className="card-title">{title}</h1>
          <span className="card-subtitle">{subtitle}</span>

          <div className="btn-share">
            {btn ? <button className="btn-text">{btn}</button> : null}

            {sharetext ? <span className="share-text">{sharetext}</span> : null}
          </div>
        </div>

        <div className="card-icon">
          <img src={icon} alt="icon" />
        </div>
      </div>
    </div>
  );
}
