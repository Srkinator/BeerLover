import React from "react";
import { setInterval } from "timers";


class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: "pending"
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                timer: new Date().toLocaleTimeString()
            });

        }, 1000);
    }

    render() {
        return (
            <div className="container footer bg-primary">
                <div style={{ textAlign: "center"}} className="row">
                    <span className="footerCopyright" style={{float:"right"}}>Copyright (C) 2018 by Srdjan Popovic</span>
                    <p style={{ textAlign: "left", float:"left" }}> CurrentTime: {this.state.timer} </p>
                </div>
            </div>
        )
    }
}
export default Footer;

