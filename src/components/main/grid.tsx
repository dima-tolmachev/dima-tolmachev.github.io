import React, { Component } from "react";
import data from '../../aboutme.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type Props = {
    variant: number;
};

type Project = {
    title: string;
    brief: string;
    stack: string[];
    source: string;
    preview: string;
    type: number;
    id: number;
};

class Grid extends Component<Props> {
    details = (link: string): void => {
        window.location.href = link;
    };

    render() {
        var projects: Project[] = data.projects;
        
        if (this.props.variant !== 1) {
            projects = projects.filter((project) => {
                return (project.type === this.props.variant);
            });
        }

        console.log(projects);

        return (
            <div className="grid">
                {projects.map((project, index) => 
                    <Card onClick={() => this.details(`/details?projectId=${project.id}`)} sx={{ maxWidth: 345, backgroundColor: "#25272A", color: "white", borderRadius: "5px" }} key={index}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="100"
                        image={project.preview}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {project.title}
                        </Typography>
                        <Typography variant="body2" color="text">
                            {project.brief}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                )}
            </div>
        );
    }
}

export default Grid;