import React from 'react';
import Input from './Input'
import List from './List'
export default class L2 extends React.Component{

    state={
        title:"",
        user:"Mohit",
        users:[
            "Mohit",
            "Rohit",
            "Saurabh",
            "vishal"
        ],
        todoList:[]
    }
    addTodo=()=>{
        var todo={
            title:this.state.title,
            user:this.state.user
        }
        this.setState({
            todoList:[todo,...this.state.todoList],
            title:""
        },()=>{
            console.log(this.state)
        })
    }
    changeTitle=(val)=>{
        this.setState({
            title:val
        })
    }
    getUser=(val)=>{
        this.setState({
            user:val
        })
    }
    render(){
        return (
            <div>
              <Input users={this.state.users}
              user={this.state.user}
              title={this.state.title}
              addTodo={this.addTodo}
              changeTitle={this.changeTitle}
              getUser={this.getUser}
              />
              <List users={this.state.users} todoList={this.state.todoList}/>
            </div>
        )
    }
}