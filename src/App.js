import { useState, useEffect } from "react";

function Hello() {
  const cleanupFn = () => {
    console.log("destroyed :(");
  }
  const effectFn = () => {
    console.log("created :)");
    return cleanupFn; // useEffect function 의 return 값으로 보내는 function은 clean up 시 실행된다.
  }
  useEffect(effectFn, []);
  return <h1>Hello</h1>
}  

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      { showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
