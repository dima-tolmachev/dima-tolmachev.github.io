import React from "react";
import react, { Component } from "react";
import data from '../../aboutme.json';

class Details extends Component {

    render() {
        const projectId: string | null = new URLSearchParams(window.location.search).get("projectId");
        var legal: boolean = false;
        var info: any = {};
        

        data.projects.forEach(project => {
            if (projectId != null && project.id === parseInt(projectId)) {
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
                <div>
                    <a style={{ fontSize: "20px", color:"white", float: "right" }} href="/">Go back</a>
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