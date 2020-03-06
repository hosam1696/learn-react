import React, {Component} from "react";
import MyRegularComponent from "./MyRegularComponent";
import MyPureComponent from "./MyPureComponent";
import MemoComponent from "./MemoComponnet";
interface Props {
}

interface States {
    name: string,

}
class ParentComponent extends Component<Props, States> {
    static count: number = 0;
    constructor(props: Props) {
        super(props);
        this.state = {
            name: 'Hosam Elnabawy'
        }
    }

    componentDidMount(): void {
       const intreval =  setInterval(() => {
            this.setState({
                name: 'Hosam Elnabawy'
            })
           ParentComponent.count++;
           if (ParentComponent.count > 10) {
               clearInterval(intreval);
           }
        }, 2000)
    }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <React.Fragment>
                <h2>My Parent Component</h2>
                <MyPureComponent name={this.state.name}/>
                <MyRegularComponent name={this.state.name}/>
                <MemoComponent name={this.state.name}/>
            </React.Fragment>
        )
    }
}

export default ParentComponent;
