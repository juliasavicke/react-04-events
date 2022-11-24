export default function GreetingForm() {
  const greetEl = document.getElementById('greet');
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          greetEl.textContent = `Hello, ${e.target.name.value.trim()} ${e.target.surname.value.trim()}`;
        }}
      >
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />
        <label htmlFor='surname'>Surname</label>
        <input type='text' id='surname' />
        <input type='submit' />
      </form>
      <p className='greet' id='greet'></p>
    </div>
  );
}
