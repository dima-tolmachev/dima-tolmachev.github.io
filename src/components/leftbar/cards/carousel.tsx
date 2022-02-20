import React, { Component } from "react";
import ReactTooltip from 'react-tooltip';

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
                <ReactTooltip />
                <label style={{ fontSize: "1.5em" }}>{this.props.title}</label>
                <div className="carousel">
                    {this.props.items.map((item, index) => (
                        <div className="logo" data-tip={item.title} key={index} style={{ backgroundImage: `url(${item.picture})`}}>
                        </div>
                    ))}
                </div>
            </div>
            
        );
    }
}

export default Carousel;