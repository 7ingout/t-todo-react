import './App.css';
import { useState, useRef } from 'react'   // id를 계속 증가시키기위해 useRef 사용
import TodoLists from './components/TodoLists';
import CreateTodo from './components/CreateTodo';

function App() {
  const name = "abc";
  const [ list, setList ] = useState("");
  // input의 값을 입력할 때 (input의 value가 변경될 때)
  // onChange 함수를 실행
  // state인 list값을 input의 value 값으로 업데이트
  const onChange = (e)=> {
    const { value } = e.target;
    // console.log(e.target)
    setList(value);
  }
  // CreateTodo 컴포넌트에서 + 버튼을 클릭하면
  // todos배열에 할 일 객체가 추가됨
  const onCreate = () => {
    const listobj = {
      id: nextId.current,
      list: list,
      isDone: false,
    }
    setTodos([...todos, listobj]);  // 원래 배열(todos)을 펼쳐서 새로운 애(listobj)를 추가하기
    nextId.current +=1;
    setList("");
  }
  const [ todos, setTodos ] = useState([
    {
        id:1,
        list: "해야할일1",
        isDone: false,
    },
    {
        id:2,
        list: "해야할일2",
        isDone: false,
    },
    {
        id:3,
        list: "해야할일3",
        isDone: false,
    }
])
const nextId = useRef(todos.length+1);

// 항목삭제
// 삭제 클릭시 id값을 인수로 받아서
// todos배열에서 id값이 다른 객체만 업데이트
const onDelete = (id)=> {
  setTodos(todos.filter(todo=>id !== todo.id));
}
  return (
    <div className="App">
      <CreateTodo list={list} onChange={onChange} onCreate={onCreate}/>
      <TodoLists todos={todos} name={name} onDelete={onDelete}/>
    </div>
  );
}

export default App;
