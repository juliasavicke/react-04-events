export default function ButtonTwo() {
  let counter = 0;
  return (
    <button
      onClick={(e) => {
        counter++;
        e.target.innerHTML = `Clicked ${counter}`;
      }}
    >
      Button two
    </button>
  );
}
