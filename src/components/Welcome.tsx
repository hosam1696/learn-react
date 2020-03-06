import React, {Component} from "react";

class Welcome extends Component<{}, {visitorName: string, count: number}>{

    constructor(props: any) {
        super(props);
        this.state = {
            visitorName: 'Hosam Elnabawy',
            count: 0
        }

    }

    log() {
        this.setState((prev) => ({visitorName: 'Shimaa', count: prev.count + 1}))
    }

    logMultiTimes() {
        this.log()
        this.log()
        this.log()
        this.log()
        this.log()
        this.log()

    }

    render(): React.ReactNode {
        return (
            <div>
                <p>Counter: {this.state.count}</p>
                <p>Welcome {this.state.visitorName}</p>
                <button onClick={() => this.logMultiTimes()}>Subscribe</button>
            </div>
        )
    }
}

export default Welcome
