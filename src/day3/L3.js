import React from 'react';

export default class L3 extends React.Component {
    state = {
        title: "",
        date: "",
        list: [],
        filteredTodos: [],
        day:""
    }
    handleSubmit = () => {
        let newTodo=[...this.state.list]
        let todo = {
            title: this.state.title,
            date: this.state.date,
            day: this.state.day
        }
        newTodo.push(todo)
        this.setState({
            list:newTodo,
            filteredTodos:newTodo,
            title: "",
            date: ""
        }, () => { console.log(this.state) })
    }
    // handleDayChange=(e)=>
    // {
    //     let day=e.target.value
    //     let list=[...this.state.list]
    //     if(day==="all"){
    //      this.setState({
    //          filteredTodos:[...this.state.list],

    //         })
    //     return
    //     }
    //     var filteredResult=list.filter(todo=>todo.day===day)
    //     this.setState({
    //   filteredTodos:filteredResult
    //     })

    //  }
    render() {
        return (
            <div>
                <div>
                    <input type="text" onChange={(e) => { this.setState({ title: e.target.value }) }} placeholder="enter todo" value={this.state.title} />
                    <input type="date" onChange={(e) => { this.setState({ date: e.target.value }) }} value={this.state.date} />
                    <input type="submit" onClick={() => { this.handleSubmit() }} />
                </div>
                <select
                    onChange={e =>
                        this.setState({day:e.target.value})
                    } name="day"
                >
                    <option value="all">ALL</option>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                </select>

                <ul>
                    {
                        this.state.list.map((item, index) => 
                            this.state.day===item.day &&
                                <li key={index}>{item.title}  {"   "} {item.date} {" "}{item.day}</li>
                                
                            
                        )
                    }
                </ul>
            </div>
        )
    }
}