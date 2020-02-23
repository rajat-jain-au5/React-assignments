import React from 'react';
import { connect } from 'react-redux'
class D5L1 extends React.Component{
    render(){
        return (
            <div>
             {this.props.title}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return state
}
export default connect(mapStateToProps) (D5L1)