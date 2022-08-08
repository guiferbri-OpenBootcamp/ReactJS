import logo from './logo.svg';
import './App.css';
import ComponentA from './components/containers/componentA';
import { Contact } from './models/Contact.class';
import ClockF from './components/pure/Clock';

function App() {

  const defaultContact = new Contact("Guiomar", "Bobadilla", "guiomar@email.com", true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
        {/* Ejercicio 1,2,3 */}
        {/*<ComponentA contact={defaultContact}></ComponentA>*/}
        {/* Ejercicio 4,5,6 */}
        <ClockF></ClockF>
      </header>
    </div>
  );
}

export default App;
