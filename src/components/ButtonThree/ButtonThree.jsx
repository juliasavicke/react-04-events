export default function ButtonThree() {
  return (
    <button
      onClick={(e) => {
        e.target.style.display = 'none';
      }}
    >
      Button Three
    </button>
  );
}
