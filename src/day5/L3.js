import React from 'react';
import { connect } from 'react-redux'
import List from '../day5/List'
import {changeInput,addTodo} from '../actionCreators/action'
import { bindActionCreators } from 'redux';

class D5L3 extends React.Component {
    render() {
        return (
            <div>
            <input type="text" onChange={(e) => this.props.changeInput(e)} placeholder="enter todo here.." value={this.props.title1} />
            <button onClick={()=>this.props.addTodo()} >
                Add Todo
            </button>
            
            <List/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({changeInput,addTodo},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(D5L3)