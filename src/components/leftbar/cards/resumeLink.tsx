import React, { Component } from "react";

class ResumeLink extends Component {
    render() {
        return (
            <div className="card" onClick={() => { window.location.href = "https://github.com/dima-tolmachev" }} style={{ textAlign: "center", cursor: "pointer", backgroundColor: "#25272A"}}>
                <label style={{ fontSize: "1.5em", cursor: "pointer" }}>Github</label>
            </div>
        );
    };
}

export default ResumeLink;