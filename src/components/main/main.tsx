import React, { Component } from "react";
import Filter from './filter';
import Grid from './grid';

class Main extends Component {
    state = {
        variant: 1
    }

    change = (e: any) =>{
        this.setState({variant: parseInt(e.target.value)});
    }

    render() {
        return(
            <div className="main">
                <Filter handleChange={this.change} />
                <Grid variant={this.state.variant}/>
            </div>
        )
    }
}

export default Main;