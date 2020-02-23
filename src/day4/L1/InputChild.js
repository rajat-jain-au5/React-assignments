import React from 'react';

export default class InputChild extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor="title">Title </label> :&nbsp;&nbsp;&nbsp;
                <input type="text" value={this.props.title} onChange={(e) => this.props.changeTitle(e.target.value)} placeholder="Enter your text" />
            </div>
        )
    }
}