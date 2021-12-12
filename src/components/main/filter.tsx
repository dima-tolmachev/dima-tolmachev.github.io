import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="filter" style={{ width: "100%" }}>
                <select name="filter" id="filter" style={{ minWidth: "30%", height: "2.5em", backgroundColor: "#494161", borderRadius: "5px", border: "0px", color: "white" }}>
                    <option value="1">All</option>
                    <option value="2">Commercial</option>
                    <option value="3">For fun</option>
                </select>
            </div>
        );
    };
}

export default Filter;