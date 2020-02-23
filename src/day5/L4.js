import React from 'react';
import { connect } from 'react-redux'
import List4 from '../day5/List4'
import { changetitle, changeDeadline, addTodoToList } from '../actionCreators/action'
import { bindActionCreators } from 'redux';

class D5L4 extends React.Component {
    state={
        todoToShow:"today"
    }
    render() {
        return (
            <div>
            <label htmlFor="Todo">Todo: </label> &nbsp;
            <input type="text" onChange={(e) => this.props.changetitle(e)} placeholder="enter todo here.." value={this.props.title2} />
            <br/>
            <br/>
            <label htmlFor="deadline">Deadline: </label> &nbsp;
            <input type="date" onChange={(e) => this.props.changeDeadline(e)} value={this.props.deadline} /> &nbsp;
            <button onClick={() => this.props.addTodoToList()} >
                    Add Todo
            </button>
            <br/>
            <br/>
            <select name="date" onChange={(e) => this.setState({ todoToShow: e.target.value })} >
                <option value="today">Today</option>
                <option value="previous">Previous</option>
                <option value="next">Next</option>
            </select>
            <br/>

                <List4 todoToShow={this.state.todoToShow}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changetitle,changeDeadline,addTodoToList }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(D5L4)