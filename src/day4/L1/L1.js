import React from 'react';
import InputChild from './InputChild'
export default class D4L1 extends React.Component {

    state = {
        title: ""
    }
    changeTitle = (val) => {
        this.setState({
            title: val
        })
    }
    render() {
        return (
            <div>
                <InputChild title={this.state.title} changeTitle={this.changeTitle} />
                <span>{this.state.title}</span>
            </div>
        )
    }
}