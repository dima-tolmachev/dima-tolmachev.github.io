import React, { Component } from "react";

class Contacts extends Component {
  render() {
     return(
        <div className="card">
            <label style={{ fontSize: "1.5em" }}>Contact me</label>
            <div className="contactWay">
                <img src="./pics/contacts/discord.svg" alt="discord logo/icon" />
                <label style={{ fontSize: "1.15em" }}>AzesT#6065</label>
            </div>

            <div className="contactWay">
                <img src="./pics/contacts/telegram.svg" alt="telegram logo/icon" />
                <label style={{ fontSize: "1.15em" }}>@dimatolmachev</label>
            </div>
        
        </div>
     );
    }
}

export default Contacts;