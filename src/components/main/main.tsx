import React, { Component } from "react";
import Filter from './filter';
import Grid from './grid';
import Details from "./details";

class Main extends Component {
    state = {
        showMe: 0,
        variant: 1
    }

    variantChange = (e: any) => {
        this.setState({ variant: parseInt(e.target.value) });
    }

    swapContent = (e: any) => {
        this.setState({ showMe: e });
    }

    goBack = () => {
        this.setState({ showMe: 0});
    }

    render() {
        return (
            <div className="main">
                { !this.state.showMe ? <Filter handleChange={this.variantChange} /> : null}
                { !this.state.showMe ? <Grid showDetails={this.swapContent} variant={this.state.variant} /> : <Details id={this.state.showMe} goBack={this.goBack} /> }
            </div>
        )
    }
}

export default Main;