import Button from './components/Button/Button';
import ButtonOne from './components/ButtonOne/ButtonOne';
import ButtonTwo from './components/ButtonTwo/ButtonTwo';
import Form from './components/Form/Form';

function App() {
  return (
    <div>
      <h1>Mouse events</h1>
      {/** Mouse events: click, contextmenu, mouseenter, mouseleave, mousemove */}
      <Button />
      <h2>Form events</h2>
      {/** Form events: submit, reset */}
      <Form />
      <h2>Task 1</h2>
      <ButtonOne />
      <ButtonTwo />
    </div>
  );
}

export default App;
