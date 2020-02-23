import React from 'react';
import { connect } from 'react-redux';

class List4 extends React.Component{
    render(){
        return (<div>
            <h4>Todo List</h4>
             {
                this.props.todos1.map((item,index)=>{
                   if (checkDate(item.deadline,this.props.todoToShow))
                    return <li key={index}>{item.title2} {" "} {item.deadline}</li>
                    return null
                })
            }
        </div>
           
        )
    }
}
const mapStateToProps=(state)=>{
    return state

}
export default connect(mapStateToProps) (List4)

function checkDate(date,day) {
    let x = new Date(date)
    let y = new Date(new Date().toISOString().split("T")[0])
    let Difference_In_Time = x.getTime() - y.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let check = {
        today: Difference_In_Days < 1 && Difference_In_Days > -1,
        next: Difference_In_Days >= 1,
        previous: Difference_In_Days <= - 1
    }
    return check[day]
}