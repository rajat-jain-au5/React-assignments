
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



// export function getTodo() {
//     return function(dispatch) {
//         dispatch({  type:"FETCH_REQUEST"})
//         return  axios.get("https://jsonplaceholder.typicode.com/todos")
//         .then(response => {
//             console.log(response)
//          response.json()
//         })
//         .then(json =>{
//          dispatch({  type:"FETCH_SUCCESS",payload:json.data })
//          console.log(json.data)
//         })
//         .catch(err=>dispatch({ type:"FETCH_ERROR",payload:err }));
//     };
// }
export function getTodo(){
    let todos=fetch("https://jsonplaceholder.typicode.com/todos")
    return (dispatch)=>{
       dispatch({
           type:"FETCH_REQUEST",
           payload:true
       })
       
        todos.then(res =>{
            res.json()
            .then(data=>{
                console.log(data)
                return dispatch({
                    type:"FETCH_SUCCESS",
                    payload:data,
                })
            })
        })

    }
}