import react, { Component } from 'react';

class Intruduction extends Component {
    render(): react.ReactNode {
        return (
            <div className="card">
                <label style={{ fontSize: "5em" }}>Hello,</label>
                <br />
                <label style={{ fontSize: "1.15em" }}>I'm Dima, an 18 y.o. programmer from Moscow</label>
            </div>
        );
    }
}

export default Intruduction;