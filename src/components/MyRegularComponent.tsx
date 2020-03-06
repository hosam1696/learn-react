import React, {Component} from "react";

interface Props {
    name: string
}

interface States {
    timer: number
}

class MyRegularComponent extends Component<Props, States>{

    constructor(props: Props) {
        super(props);
        this.state = {
            timer: 0
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        console.log('Regular component Render');
        return (
            <div>My Regular Component > {this.props.name}</div>
        )
    }
}

export default MyRegularComponent;
