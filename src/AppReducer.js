import './App.css';
import { useRef, useReducer, useCallback } from 'react'; 
import CreateTodo from './components/CreateTodo';
import TodoLists from './components/TodoLists';

const initialState = {
    text: "",
    todos: [
        {
            id:1,
            todotext: "리액트 공부하기",
            isDone: false,
        },
        {
            id:2,
            todotext: "타입스크립트 공부하기",
            isDone: false,
        },
        {
            id:3,
            todotext: "reducer 공부하기",
            isDone: false,
        }
  ]
}
function reducer(state, action) {
  switch(action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        text :action.text
      };
      case "CREATE_TODO":
      return {
        text: "",
        todos: state.todos.concat(action.todo)
      }
      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter(todo=> todo.id !== action.id)
        };
        case "ISDONE_TODO":
        return {
          ...state,
          todos: state.todos.map(todo => 
            todo.id === action.id ? {...todo, isDone: !todo.isDone}: todo)
        }
      default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { text, todos } = state;
  const onChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      text: e.target.value
    })
    console.log(e.target.value)
  }
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
       dispatch({
      type: "CREATE_TODO",
      todo: {
        id: nextId.current,
        todotext: text,
        isDone: false,
      }
    })
  },[])
  const onDelete = useCallback((id) => {
    dispatch({
      type: "DELETE_TODO",
      id: id,
    })
  }, [])
  const onToggle = useCallback((id) => {
    dispatch({
      type: "ISDONE_TODO",
      id: id
    })
  }, [])
  return (
      <div className="App">
        <CreateTodo text = {text} onChange={onChange} onCreate={onCreate}/>
        <TodoLists todos={todos} onDelete={onDelete} onToggle={onToggle}/>
      </div>
    );
} 

export default App;