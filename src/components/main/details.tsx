import React from "react";
import react, { Component } from "react";
import data from '../../aboutme.json';

type props = {
    id: number;
    goBack: Function;
}

class Details extends Component<props> {
    render() {
        const projectId: number = this.props.id;
        var legal: boolean = false;
        var info: any = {};
        

        data.projects.forEach(project => {
            if (projectId != null && project.id === projectId) {
                legal = true;
                info = project;
            }
        });

        if (legal) {
            var element: any = React.createElement("label", {}, "not available");
            if (info.source.length !== 0) {
                element = React.createElement("a", {href: info.source}, `${info.source}`);
            }

            return (
                <div className={"details"}>
                    <label style={{ fontSize: "20px", borderBottom: "2px", borderBottomColor: "white", cursor: "pointer", color:"white", float: "right" }} onClick={() => {this.props.goBack()}}>Go back</label>
                    <h2>{info.title}</h2>
                    <p><b>Stack:</b> {info.stack.join(", ")}</p>
                    <p><b>Source code:</b> {element}</p>
                    <hr />
                    <p><b>Description</b></p>
                    {info.description.map((text: string, index: number): react.ReactNode =>
                        <p key={index}>{text}</p>
                    )}

                    {info.links.map((content: any, index: number): react.ReactNode =>
                        <a key={index} href={content.link}>{content.label}<br /></a>
                    )}


                    {info.images.map((link: string, index: number): react.ReactNode =>
                        <img key={index} style={{ maxWidth: "95%", border: "1px solid gray" }} alt="dummy" src={link}></img>
                    )}

                    <br />
                </div>
            );
        } else {
            window.location.href = '/';
            return (
                <div>
                    <h2>No such project, you are hacker</h2>
                </div>
            );
        }
    }
}

export default Details;