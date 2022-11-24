import { useState } from 'react';

export default function ButtonThree() {
  const [displayButton, setDisplayButton] = useState(true);
  return (
    // <button
    //   onClick={(e) => {
    //     e.target.style.display = 'none';
    //   }}
    // >
    //   Button Three
    // </button>
    displayButton && (
      <button onClick={() => setDisplayButton(false)}>Button Three</button>
    )
  );
}
