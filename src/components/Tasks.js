import React ,{useState}from 'react'
import { MDBInput } from "mdbreact";
import { useDispatch } from 'react-redux';
import { MDBBtn,MDBIcon } from "mdb-react-ui-kit";
import { addTask } from './redux/actions/action';
import "./style/index.css"
import LisTasks from './lisTasks';


const  Tasks=()=> {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    
    // HandleChane
    const handleChange=(e)=>{
     setInput(
         e.target.value
     )
     console.log(`input`, input)
    }
    //  AddTODO
     const addTasks=()=>{
       if(input){
        dispatch(addTask({input:input,isDone:false,id:Math.random()}))
        setInput("") 
       }
       else{
           alert("is empty...")
       }
     }
    return (  
        <div className="container mt-5">
         <div className="d-flex">
            <div>
            <h1 >TodoList</h1>
        <div className="d-flex text-center">
        <MDBInput label="new task" value={input}   onChange={handleChange}/>
        <MDBBtn className="add px-5 " color="indigo" onClick={addTasks}>Add
        <MDBIcon className="ps-2" icon="plus" />
        </MDBBtn>
        </div>
       
        <LisTasks/>
            </div>
            <div>
                <img className="w-75 h-75 image-fluid  mt-5" src="image/pic.svg" alt="pic"/>
            </div>
         </div>
        
        </div>
    )
}
export default  Tasks