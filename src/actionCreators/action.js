import axios from 'axios';
export function handleInput(e) {
    return {
        type: "edit_input",
        payload: e.target.value
    }
}
export function changeInput(event) {
    return {
        type: "change_input",
        payload: event.target.value
    }
}
export function addTodo() {
    return {
        type: "add_Todo"
    }
}

export function changetitle(event) {
    return {
        type: "change_title",
        payload: event.target.value
    }
}
export function changeDeadline(event) {
    return {
        type: "change_deadline",
        payload: event.target.value
    }
}
export function addTodoToList() {
    return {
        type: "addTodo"
    }
}

export function fetchTodorequest(){
    return{
        type:"FETCH_REQUEST",
    }
}

export function fetchTodoSuccess(json){
    return{
        type:"FETCH_SUCCESS",
        payload:json.data
    }
}
export function fetchError(err){
    return {
        type:"FETCH_ERROR",
        payload:err
}
}

export function getTodo() {
    return function(dispatch) {
        dispatch(fetchTodorequest())
        return  axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            console.log(response)
            response.json();
        })
        .then(json =>{
            console.log(json)
         dispatch(fetchTodoSuccess(json))}
          )
        .catch(err=>dispatch(fetchError(err)));
    };
}