import React from "react";
import "../styles/Footer.less"

export default function Footer(props) {
  return (
    <div className="footer">
        <div>
            <h1>{props.note}</h1>
        </div>
    </div>
  );
}
