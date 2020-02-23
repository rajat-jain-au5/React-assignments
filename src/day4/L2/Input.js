import React from 'react';

export default class Input extends React.Component{
    render(){
        return (
            <div>
                <label htmlFor="title">Title </label> :&nbsp;&nbsp;&nbsp;
                <input  type="text" value={this.props.title} onChange={(e) => this.props.changeTitle(e.target.value)}  placeholder="Enter text here" /><br/>
                <br/>
                <select name="users" onChange={(e)=>this.props.getUser(e.target.value)}  value={this.props.user} >
                    {this.props.users.map((user,index)=>{
                        return(
                        <option key={index}>{user}</option>)
                    })}
                </select>
                <button onClick ={()=>this.props.addTodo()}>Submit</button>
            </div>
        )
    }
}