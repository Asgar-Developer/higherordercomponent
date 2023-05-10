import { useState } from "react";

let Counter = (WrappedComponent) => {
  function Counter(props) {
    const [count, setCount] = useState(0);
    const increment = (props) => {
      setCount(count + 1);
    };
    return (
      <div>
        <WrappedComponent count={count} increment={increment} {...props} />
      </div>
    );
  }
  return Counter;
};

export default Counter;
