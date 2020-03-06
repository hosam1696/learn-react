import React, {Component} from "react";
interface Props {
}

interface States {
    name: string,

}

class FRInput extends Component {
    inputRef: React.RefObject<HTMLInputElement>;
    constructor(props: Props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount(): void {
        console.log(this.inputRef);
        // @ts-ignore
        this.inputRef.current.focus();
    }


    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error({error })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <form action="" className="myform">
                <label htmlFor="my-name">Name</label>
                <input type="text" id="my-name" ref={this.inputRef}/>
            </form>
        )
    }
}


export default FRInput;
