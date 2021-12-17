import React, { Component } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

type Project = {
    title: string;
    description: string;
    stack: string[];
    source: string;
    type: number;
};

type Props = {
    index: number;
    content: Project;
}

const sty = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    maxHeight: '50vh',
    maxWidth: '75vw',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#18181c',
    border: '1px solid white',
    boxShadow: 24,
    p: 4
};

class Card extends Component<Props> {
    state = {
        open: false
    }

    handleClose = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        var moreDetails = React.createElement("a", { href: `/${this.props.content.title}` }, "More Details");

        var sourceCode;

        if (this.props.content.source.length > 0) {
            sourceCode = React.createElement("a", { href: `${this.props.content.source}` }, 'Source code');
        } else {
            sourceCode = React.createElement("span", null, 'No source available');
        }

        return (
            <div onClick={this.handleClose} className="grid-item" key={this.props.index}>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <Box sx={sty}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <label>{this.props.content.title}</label>                    
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <span>{this.props.content.description}</span>  
                        </Typography>
                        <Typography style={{marginTop: "2%"}} id="modal-modal-description">
                            Stack: {this.props.content.stack.join(", ")}
                        </Typography>

                        <Typography style={{marginTop: "2%"}} id="modal-modal-description">
                            {moreDetails} | {sourceCode}
                        </Typography>
                    </Box>
                </Modal>

                <label>{this.props.content.title}</label>
            </div>
        );
    }
}

export default Card;