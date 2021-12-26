import react, { Component } from 'react';

class Intruduction extends Component {
    handleClick = (): void => {
        window.location.href = '/';
    };

    render(): react.ReactNode {
        return (
            <div onClick={() => this.handleClick()} style={{cursor: "pointer"}} className="card">
                <label style={{ fontSize: "5em", cursor: "pointer" }}>Hello,</label>
                <br />
                <label style={{ fontSize: "1.15em", cursor: "pointer" }}>I'm Dima, an 18 y.o. programmer from Moscow</label>                    
            </div>
        );
    };
}

export default Intruduction;