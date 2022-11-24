import './buttonOne.css';
export default function ButtonOne() {
  return (
    <button
      className='btn1'
      onClick={(e) => {
        e.target.className === 'darkMode'
          ? (e.target.className = 'lightMode')
          : (e.target.className = 'darkMode');
      }}
    >
      button one
    </button>
  );
}
