import Button from './components/EVENTS/Button/Button';
import ButtonOne from './components/EVENTS/ButtonOne/ButtonOne';
import ButtonThree from './components/EVENTS/ButtonThree/ButtonThree';
import ButtonTwo from './components/EVENTS/ButtonTwo/ButtonTwo';
import Form from './components/EVENTS/Form/Form';
import GreetingForm from './components/EVENTS/GreetingForm/GreetingForm';
import MathButton from './components/EVENTS/MathButton/MathButton';
import Content from './components/LAYOUT/Content/Content';
import Feature from './components/LAYOUT/Feature/Feature';
import Header from './components/LAYOUT/Header/Header';
import SignUp from './components/LAYOUT/SignUp/SignUp';

function App() {
  return (
    // <div>
    //   <h1>Mouse events</h1>
    //   {/** Mouse events: click, contextmenu, mouseenter, mouseleave, mousemove */}
    //   <Button />
    //   <h2>Form events</h2>
    //   {/** Form events: submit, reset */}
    //   <Form />
    //   <h2>Task 1</h2>
    //   <ButtonOne />
    //   <ButtonTwo />
    //   <ButtonThree />
    //   <h2>Task 2</h2>
    //   <GreetingForm />
    //   <MathButton action={'+'} numbers={[5, 6]} />
    //   <MathButton action={'-'} numbers={[78, 4]} />
    // </div>
    <>
      <header>
        <Header />
      </header>
      <main className='flex'>
        <Content />
        <div className='signUpAndFeature'>
          <SignUp />
          <Feature backgroundColor='#F5CF8E' />
          <Feature backgroundColor='#F09A9D' />
          <Feature backgroundColor='#C8C6FA' />
        </div>
      </main>
    </>
  );
}

export default App;
