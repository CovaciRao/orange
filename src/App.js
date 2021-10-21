import logo from './logo.svg';
import './App.css';
import Cat from './Cat/Cat';
import FruitBox from './FruitBox/FruitBox';
import Button from './Button';
import SubmitFormButton from './SubmitFormButton/SubmitFormButton';

function App() {
  return (
    <div className="App">
      {/* <Cat animal={'Doggo'}>
        <span>
          this is my Doggo
        </span>
      </Cat>
      <FruitBox />
      <Button label="Home" />
      <Button label="About" theme="ternary-button" />
      <Button icon="fas fa-user" label="My Profile" />
      <Button icon="fas fa-power-off" label="Log Out" />
      <Button icon="fas fa-pencil" label="Edit" theme="secoundary-button"/> */}
      <SubmitFormButton theme={'button'} type={'submit'} label={'Register'} />
    </div>
  );
}

export default App;
