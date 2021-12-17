import React, { Component } from "react";
import data from '../../aboutme.json';

class Details extends Component {

    render() {
        const projectName: string | null = new URLSearchParams(window.location.search).get("project");
        var legal: boolean = false;

        data.projects.forEach(project => {
            if (projectName != null && project.title.toLowerCase() === projectName.toLowerCase()) {
                legal = true;
            }
        });

        if (legal) {
            return (
                <div>
                    <h2>Back to all projects</h2>
                    <label>{projectName}</label>
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