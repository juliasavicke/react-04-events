import Button from './components/Button/Button';
import ButtonOne from './components/ButtonOne/ButtonOne';
import ButtonThree from './components/ButtonThree/ButtonThree';
import ButtonTwo from './components/ButtonTwo/ButtonTwo';
import Form from './components/Form/Form';
import GreetingForm from './components/GreetingForm/GreetingForm';

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
      <ButtonThree />
      <GreetingForm />
    </div>
  );
}

export default App;
