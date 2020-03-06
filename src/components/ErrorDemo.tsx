import React, {Component} from 'react';

class ErrorDemo extends Component {

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error({error})
    }



    render() {
        return (
            <div>
               Error Handling
            </div>
        );
    }
}

export default ErrorDemo;



