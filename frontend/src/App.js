import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header className= "App-header">
    <p>
      Welcome to SomethingEthical
    </p>
    </header>
  )
}

function Main() {
  const handleClick = (message) => {
    alert('We will add a redirect here: ' + message);
  };
  return (
    <div className = "App-main">
      <Button label="Log In" onClick={() => handleClick('LogIn Clicked')}/>
      <Button label="Sign Up" onClick={() => handleClick('SignUp Clicked')}/>
    </div>
  )
}

function Footer() {

}

function Button({ label, onClick }) {
  return (
    <button onClick={onClick} className = "App-button">
      {label}
    </button>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
