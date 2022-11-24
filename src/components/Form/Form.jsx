export default function Form() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('event ===', event.target.surname.value);
        const name = event.target.name.value;
        const surname = event.target.surname.value;
        const age = event.target.age.value;
      }}
      onReset={() => {
        console.log('form reset');
      }}
    >
      <div>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' />
      </div>
      <div>
        <label htmlFor='surname'>Surname</label>
        <input id='surname' type='text' />
      </div>
      <div>
        <label htmlFor='age'>Age</label>
        <input id='age' type='text' />
      </div>
      <div>
        <input type='submit' />
      </div>
    </form>
  );
}
