import React, {Component} from "react";
import  styles from './Myform.module.css';
class MyForm extends Component <{}, { username: string , comments: string, topic: 'angular' | 'react' | 'vue'}> {
    private handleTopic = (event: any) => {
        this.setState({topic: event.target.value})
    };




    constructor(props: any) {
        super(props);

        this.state = {
            username: '',
            comments: '',
            topic: "angular"
        }
    }

    OnUserInput = (event: any) => {
        console.log(event);
        this.setState({username: event.target.value})
    };

    private onCommentsInput = (event: any) => {
        this.setState({comments: event.target.value});
    };

    private handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(this.state)
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <form onSubmit={this.handleSubmit} className={styles.myform} action="">
                <label htmlFor="">User Name</label>
                <input type="text" value={this.state.username}
                       onChange={this.OnUserInput}
                       placeholder="Type Your name"/>
                       <p>You Have Entered: {this.state.username}</p>
                <hr/>

                <label htmlFor="">Comments</label>
                <textarea value={this.state.comments} onChange={this.onCommentsInput}/>
                <p>You Have Commented: {this.state.comments}</p>
                <hr/>
                <label htmlFor="">Learning Topic</label>
                <select value={this.state.topic} onChange={this.handleTopic}>
                    <option value="angular">Angular</option>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>

                </select>

                <button type="submit">Submit</button>
            </form>
        )
    }

}


export default MyForm;
