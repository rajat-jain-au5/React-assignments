import React from 'react';
import { connect } from "react-redux";
import {getTodo} from '../actionCreators/action'
import { bindActionCreators } from 'redux';
import List5 from '../day5/List5'
class D5L5 extends React.Component{
    // componentDidMount = () => {
    //     setTimeout(this.getTodo, 3000);
    //   };
    render(){
        return (
            <div>
                <button onClick={()=>{this.props.getTodo()}}>Retry</button>
                
                <List5 />
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