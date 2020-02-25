import React from 'react';

export default class List extends React.Component{
    state={
        color:getRandomColor()
    }
    componentDidUpdate(prevProps) {
        let newstate = {...this.state }
        if (this.props.todoList !== prevProps.todoList) {
            this.props.todoList.map(todoColor => { newstate[todoColor.user] = newstate[todoColor.user] ? newstate[todoColor.user] : getRandomColor()
            return null }
            )
            this.setState(newstate)
        }
    }

    render(){
        return(
            <div>
                <ul>
                {
                    this.props.todoList.map((todo,index)=>{
                        return (
                        <li style={{backgroundColor:this.state[todo.user]}} key={index}>{todo.title} {"  "} {todo.user}</li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}