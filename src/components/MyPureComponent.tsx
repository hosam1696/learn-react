import React, {PureComponent} from "react";
interface Props {
    name: string
}

class MyPureComponent extends PureComponent<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        console.log('Pure Component Render');
        return (
            <div>My Pure Component > {this.props.name}</div>
        )
    }
}

export default MyPureComponent;
