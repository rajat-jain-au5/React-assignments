import React from 'react';
import Input from './Input'
import List from './List'
export default class D4L3 extends React.Component{

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
            title:"",
            userTodo:"Mohit",
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

              <br/>
              <br/>
              <h4>Show Todos According to User</h4>
             <select name="users" onChange={(e)=>this.setState({userTodo:e.target.value})}  value={this.state.userTodo} >
              {
                  this.state.users.map((user,index)=>{
                      return (
                        <option key={index} value={user}>{user}</option>
                      )
                  })
              }
              </select>
              <List users={this.state.users} todoList={this.state.todoList} user={this.state.userTodo}/>
            </div>
        )
    }
}