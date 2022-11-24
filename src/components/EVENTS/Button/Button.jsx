export default function Button() {
  return (
    <div>
      <button
        onClick={(event) => {
          console.log('event ===', event.target);
          const buttonClicked = event.target;
          buttonClicked.style.backgroundColor = 'aqua';
        }}
      >
        Click me
      </button>
    </div>
  );
}

// export default function Button() {
//   function showAlert() {
//     alert('clicked');
//   }
//   return (
//     <div>
//       <button
//         onClick={() => {
//           showAlert('John');
//         }}
//       >
//         Click me
//       </button>
//     </div>
//   );
// }
