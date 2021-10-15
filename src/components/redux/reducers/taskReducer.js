import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../actions/type"

const initialState={
    todoTask:[]
}

const taskReducer=(state=initialState,action)=>{
    const {type,payload}=action
switch (type){
    case ADD_TASK:
        return(
            {...state,
            todoTask:[...state.todoTask,payload]}
        )
    case DELETE_TASK:
        return(
            {...state,todoTask:state.todoTask.filter((el)=>el.id !== payload)}
        )
    case COMPLETE_TASK:
        return(
            {...state,todoTask:state.todoTask.map((el)=>(el.id===payload)?{...el,isDone:!el.isDone }:el)}
        )
    case EDIT_TASK:
        return(
            
            {...state,todoTask:state.todoTask.map((el)=>(el.id===payload.id)?{...el,input:payload.value}:el)}
            )
    default:
    return state
}

}
export default taskReducer