import React, { Component } from "react";
import Intruduction from "./cards/introduction";
import Carousel from "./cards/carousel";
import Contacts from "./cards/contacts";
import ResumeLink from "./cards/resumeLink";

var example = {
    title: "Node JS",
    picture: "https://i.imgur.com/qkdpN.png",
};

var exampleArray = [example, example, example, example, example,example,example,example,example,example,example,example,example,example,example,example,example,example,example,example,example,example,example, example, example, example, example, example, example, example,  example, example, example, example, example, example];

class Burger extends Component {
    render() {
        return(
            <div className={"leftBar"}>
                <Intruduction />
                <Carousel title="Favorite languages" items={exampleArray} />
                <Carousel title="I work with" items={exampleArray} />
                <Contacts />
                <ResumeLink />
            </div>
        );
    }
}

export default Burger;