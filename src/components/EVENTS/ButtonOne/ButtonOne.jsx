import { useState } from 'react';
import './buttonOne.css';
export default function ButtonOne() {
  const [lightTheme, setLightTheme] = useState(true);
  const style = {
    color: lightTheme ? 'white' : 'black',
    backgroundColor: lightTheme ? 'black' : 'white',
  };
  return (
    // <button
    //   className='btn1'
    //   onClick={(e) => {
    //     e.target.className === 'darkMode'
    //       ? (e.target.className = 'lightMode')
    //       : (e.target.className = 'darkMode');
    //   }}
    // >
    //   button one
    // </button>
    <button style={style} onClick={() => setLightTheme((prev) => !prev)}>
      Click me
    </button>
  );
}
