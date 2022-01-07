import { useState, useEffect } from "react";

function Hello() {
  // clean up function 원리
  // const cleanupFn = () => {
  //   console.log("destroyed :(");
  // }
  // const effectFn = () => {
  //   console.log("created :)");
  //   return cleanupFn; // useEffect function 의 return 값으로 보내는 function은 clean up 시 실행된다.
  // }
  // useEffect(effectFn, []);

  // 실제로 쓸 때는 아래와 같이 많이 씀
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :("); // return clean up function 
  }, []);

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
