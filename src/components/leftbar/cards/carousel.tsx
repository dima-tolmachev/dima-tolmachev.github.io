import React, { Component } from "react";

type item = {
    picture: string;
    title: string;
};

type Props = {
    title: string;
    items: Array<item>;
};

class Carousel extends Component<Props> {
    render() {
        return (
            <div className="card">
                <label style={{ fontSize: "1.5em" }}>{this.props.title}</label>
                <div className="carousel">
                    {this.props.items.map((item) => (
                        <div className="logo" style={{ backgroundImage: `url(${item.picture})`}}></div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;