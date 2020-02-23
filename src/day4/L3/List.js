import React from 'react';

export default class List extends React.Component{
    render(){
        return(
            <div>
                <ul>
                {
                    this.props.todoList.map((todo,index)=>
                    this.props.user===todo.user &&   
                    <li key={index}>{todo.title} {"  "} {todo.user}</li>
                    )
                }
                </ul>
            </div>
        )
    }
}