import { useState } from "react";

const Welcome = () => {
  const [name, setName] = useState("Olaseni");
  const [count, setCount] = useState(0);
  const addNumbers = () => {
    setCount(count + 1)
  };
  const reduceNumbers = () => {
    setCount(count <=0 ? 0 : count - 1)
  }

  const buttonClick = () => {
    setName(1234)
  }
  return (
    <div className="">
      Welcome{name}
    <button onClick={buttonClick}>Click Me</button>
    <button onClick={addNumbers}>+</button>
    <p>{count}</p>
    <button onClick={reduceNumbers}>-</button>
    </div>
  )
};
export default Welcome;