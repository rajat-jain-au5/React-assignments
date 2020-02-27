import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
let intialState = {
    title: "hello I am using Redux",
    searchTerm: "hello this is input",
    title1: "",
    todos: [],
    title2: "",
    deadline: "",
    todos1: [],
    todosApi:[],
    loading:false,
    error:""
}

function appReducer(state = intialState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "edit_input":
            stateCopy.searchTerm = action.payload
            return stateCopy
        case "change_input":
            stateCopy.title1 = action.payload
            return stateCopy
        case "add_Todo":
            stateCopy.todos.unshift(stateCopy.title1)
            stateCopy.title1 = ""
            console.log(stateCopy)
            return stateCopy
        case "change_title":
            stateCopy.title2 = action.payload
            return stateCopy
        case "change_deadline":
            stateCopy.deadline = action.payload
            return stateCopy
        case "addTodo":
            var todo={
                title2:stateCopy.title2,
                deadline:stateCopy.deadline
            }
            stateCopy.todos1.unshift(todo)
          
            stateCopy.title2 = ""
            stateCopy.deadline = ""
            return stateCopy
            
            case "FETCH_REQUEST":
                stateCopy.loading=action.payload
                return stateCopy
           
         case "FETCH_SUCCESS":
             stateCopy.todosApi=[...action.payload] 
             stateCopy.loading=!stateCopy.loading 
             console.log(stateCopy)
             return stateCopy
        
        default:
            return stateCopy
    }
}


const store = createStore(appReducer,applyMiddleware(thunk))
export default store;