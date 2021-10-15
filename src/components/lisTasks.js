import React ,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { completeTask, deleteTask } from './redux/actions/action';
import EditTasks from './editTask';
import "./style/index.css"
export default function LisTasks() {

    const todos=useSelector(state=>state.todoTask)
    const [filterTodo, setFilterTodo] = useState([])
    const [status,setStatus]=useState("")
    console.log(`todos`, todos)
    const dispatch = useDispatch()

  useEffect(() => {
    filtredTasks()
 
  }, [todos,status])
const filtredTasks=()=>{
  switch(status){
    case "completed":
      setFilterTodo(todos.filter((el)=>el.isDone===true))
      break;
 
  case "uncompleted":
    setFilterTodo(todos.filter((el)=>el.isDone===false))
    break;
  default:
    setFilterTodo(todos)
    break;
  }
 
}
    return (
        <div >
            <select onChange={(e) => setStatus(e.target.value)} selected="Choose your option"
          color="primary"

            className='my-3 browser-default custom-select'>
              <option>all</option>
              <option>completed</option>
              <option>uncompleted</option>
            </select>
            {
                filterTodo.map((el,key)=>
                
                <MDBContainer key={key} className="d-flex">
                <MDBListGroup style={{ width: "15rem" }} >
                  <MDBListGroupItem id={el.isDone ? 'disable': null}>{el.input}</MDBListGroupItem>
                </MDBListGroup>

                <MDBBtn size="sm"  color='danger' tag='a' floating onClick={()=>dispatch(deleteTask(el.id))}>
                <MDBIcon fas icon="trash" />
                </MDBBtn>

              <EditTasks el={el}/>

                <MDBBtn size="sm" color="default"  tag='a' floating onClick={()=>dispatch(completeTask(el.id))}>
                <MDBIcon className="pt-2" icon="check" />
                </MDBBtn>

              </MDBContainer>
                )
                
            }
          
        </div>
    )
}
