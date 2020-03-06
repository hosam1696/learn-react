import React, {Component} from 'react';
import  styles from './Myform.module.css';

interface Props {

}

interface States {
    counter: number
}

class ClickCounter extends Component<Props, States> {

    constructor(props: Props) {

        super(props);
        this.state = {
            counter: 0
        }
    }


    private incrementCounter = () => {
        this.setState((prev)=> ({counter: prev.counter + 1}))
    };
    render() {
        const {counter} = this.state;
        return (
            <form className={styles.myform}>
                <button type="button" onClick={this.incrementCounter}>Click {counter} Times</button>
            </form>
        );
    }
}

export default ClickCounter;
