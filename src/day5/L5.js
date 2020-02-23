import React from 'react';
import { connect } from "react-redux";
import {getTodo,fetchTodorequest,fetchTodoSuccess, fetchError} from '../actionCreators/action'
import { bindActionCreators } from 'redux';
class D5L5 extends React.Component{
    render(){
        return (
            <div>
                <button onClick={()=>{this.props.getTodo()}}>Get Todo</button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
   return state
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({getTodo, fetchTodorequest, fetchTodoSuccess, fetchError},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(D5L5)