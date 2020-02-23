import React from 'react';
import { connect } from 'react-redux'
import {handleInput} from '../actionCreators/action'
import { bindActionCreators } from 'redux';
class D5L2 extends React.Component {
    render() {
        return (
            <div>
            <label htmlFor="text">Input Data </label> &nbsp;
            <input type="text" onChange={(e) => this.props.handleInput(e)} value={this.props.searchTerm} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({handleInput},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(D5L2)