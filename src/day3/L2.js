import React from 'react';

export default class Input1 extends React.Component {
    state={
        title:"",
        list:[]
    }
    handleSubmit=()=>{
        this.setState({
            title:'',
            list: [this.state.title, ...this.state.list],
        })
    }
 
    render() {
        return (
            <div>
                <input type="text" value={this.state.title} placeholder="enter text here"  onChange={(e)=>{this.setState({title:e.target.value})}} />
                <input type="submit" onClick={()=>{this.handleSubmit()}} disabled={!this.state.title}/>
                

                <ul>
                    {this.state.list.map(title=>{
                        return(
                           <li>{title}</li>
                        )
                      
                    })}
                </ul>
            </div>
        )
    }
}