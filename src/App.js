import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // 해당 이벤트를 처리하는 동안에는 이벤트 수신+동작 X
    if (toDo === "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]); // currentArray를 받아와서 toDo 추가
    setToDo("");  // state를 직접적으로 수정하지는 않는다. 함수를 통해 초기화
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input  
          value={toDo} 
          onChange={onChange} 
          type="text" 
          placeholder="write your to do..." />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
