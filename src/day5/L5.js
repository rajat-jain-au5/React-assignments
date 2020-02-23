import React from 'react';
import { connect } from "react-redux";
import {getTodo} from '../actionCreators/action'
import { bindActionCreators } from 'redux';
class D5L5 extends React.Component{
    render(){
        return (
            <div>
                <button onClick={()=>{this.props.getTodo()}}>Get Todo</button>
                <ul>
                    {this.props.todosApi.map((item,index)=>{
                        return(
                        <li key={index}>{item}</li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
   return state
}
const mapDispatchToProps=(dispatch)=>{
    // return{getTodo:()=>dispatch(getTodo)}
  return bindActionCreators({getTodo},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(D5L5)