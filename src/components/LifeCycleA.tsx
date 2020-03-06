import React, {Component} from "react";

interface Props {

}

interface States {

}
class LifeCycleA extends Component<Props, States>{

    constructor(props: Props) {
        console.log('Constructor')
        super(props);
        this.state = {

        }
    }


    getDerivedStatesFromProps() {

        console.log('getDerivedStatesFromProps')
        return null
    }

    componentDidMount(): void {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<States>, snapshot?: any): void {
        console.log('componentDidUpdate')
    }

    componentWillUnmount(): void {
        console.log('componentWillUnmount')
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error({error})
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<States>): any | null {
        console.log('getSnapshotBeforeUpdate')
        return null
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <React.Fragment>
                <section className="holder">
                    Content Holder
                </section>
                <footer>
                    Footer
                </footer>
            </React.Fragment>

        )
    }
}


export default LifeCycleA
