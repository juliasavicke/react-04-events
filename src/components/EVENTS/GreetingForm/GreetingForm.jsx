import { useState } from 'react';

export default function GreetingForm() {
  const [greetingMsg, setGreetingMsg] = useState('');
  const greetEl = document.getElementById('greet');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setGreetingMsg(`Hello, ${name} ${surname}`);
          greetEl.textContent = `Hello, ${e.target.name.value.trim()} ${e.target.surname.value.trim()}`;
        }}
      >
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='surname'>Surname</label>
        <input
          type='text'
          id='surname'
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input type='submit' />
      </form>
      <p className='greet' id='greet'></p>
      {greetingMsg && <p>{greetingMsg}</p>}
    </div>
  );
}
