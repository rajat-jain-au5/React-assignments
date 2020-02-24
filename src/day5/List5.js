import React from 'react';
import { connect } from 'react-redux';

class List5 extends React.Component{
    render(){
        return (<div>
            <h4>Todo List</h4>
            {this.props.todosApi.map((item,index)=>{
                        return(
                        <li key={index}>{item.title}</li>
                        )
                    })
                    }
        </div>
           
        )
    }
}
const mapStateToProps=(state)=>{
    return state

}
export default connect(mapStateToProps) (List5)