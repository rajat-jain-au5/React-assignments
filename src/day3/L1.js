import React from 'react';

export default class Input extends React.Component{
   state={
       title:""
   }
   handleInput=(event)=>{
       this.setState({
           title:event.target.value
       })
   }

    render(){
        return (
            <div>
                <input type="text" name="title"  onChange={(event)=>{this.handleInput(event)}} placeholder="enter text here" />
                <span>{this.state.title}</span>
            </div>
        )
    }
}