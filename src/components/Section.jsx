import React from "react";

const Section = ({ title, children }) => (
    <section className="section">
        <div className="container">
            <h2 className="section-title">{title}</h2>
            <div className="section-content">{children}</div>
        </div>
    </section>
);

export default Section;
