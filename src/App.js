import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("Clicked");
  }, [counter])
  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search hear..."></input>
      <h1>{ counter }</h1>
      <button onClick={ onClick }>Click me</button>
    </div>
  );
}

export default App;
