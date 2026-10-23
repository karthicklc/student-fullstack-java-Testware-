import { useState } from "react";
function Q11() {
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
    setCount(count + 1);
    setCount((c) => c + 1);
    console.log(count);
  }
  return (
    <div>
      <h2>Q11 - React State Updates</h2>
      <p>Count: {count}</p>
      <button onClick={add}>Add</button>
    </div>
  );
}
export default Q11;
