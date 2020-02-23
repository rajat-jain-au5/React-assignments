import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component{
    render(){
        return (<div>
            <h4>ToDo List</h4>
             {
                this.props.todos.map((todo,index)=>{
                    return (
                       <li key={index}>{todo}</li>
                )})
            }
        </div>
           
        )
    }
}
const mapStateToProps=(state)=>{
    return state

}
export default connect(mapStateToProps) (List)