import React, { Component } from "react";
import Intruduction from "./cards/introduction";
import Carousel from "./cards/carousel";
import Contacts from "./cards/contacts";
//import ResumeLink from "./cards/resumeLink";
//<ResumeLink />
import data from '../../aboutme.json';

type Item = {
    title: string;
    picture: string;
};

const pls: Item[] = data["programming-languages"];
const techs: Item[] = data["technologies"];

class Burger extends Component {
    render() {
        return(
            <div className={"leftBar"}>
                <Intruduction />
                <Carousel title="Favorite languages" items={pls} />
                <Carousel title="Technologies I use" items={techs} />
                <Contacts />
            </div>
        );
    }
}

export default Burger;