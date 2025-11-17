import React from "react";

const Card = ({ title, icon, children }) => (
    <div className="card">
        <h3 className="card-title">
            {icon && <span className="card-icon">{icon}</span>}
            {title}
        </h3>
        <div className="card-content">{children}</div>
    </div>
);

export default Card;
