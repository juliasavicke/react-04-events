import { useState } from 'react';

export default function ButtonTwo() {
  // let counter = 0;
  const [counter, setCount] = useState(0);
  return (
    // <button
    //   onClick={(e) => {
    //     counter++;
    //     e.target.innerHTML = `Clicked ${counter}`;
    //   }}
    // >
    //   Button two
    // </button>
    <button
      onClick={() => {
        setCount((counter) => (counter += 1));
      }}
    >
      Button two {counter}
    </button>
  );
}
