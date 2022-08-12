import logo from './logo.svg';
import './App.css';
import ComponentA from './components/containers/componentA';
import { Contact } from './models/Contact.class';
import ClockF from './components/pure/Clock';
import ContactList from './components/containers/contactList';
import Square from './components/pure/Square';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/oauth/LoginPage';
import RegisterPage from './pages/oauth/RegisterPage';
import ContactListPage from './pages/oauth/ContactListPage';
import JokeComp from './components/pure/JokeComp';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import Filteroptions from './components/pure/FilterOptions';

function App() {

  const defaultContact = new Contact("Guiomar", "Bobadilla", "guiomar@email.com", true);
  return (
    <Router>
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
          {/*<ClockF></ClockF>*/}
          {/* Ejercicio 7,8,9 */}
          {/* <ContactList></ContactList>*/}
          {/* Ejercicio 10,11,12 */}
          {/* <Square></Square> */}
          {/* Ejercicio 13,14,15 */}
          {/*<ContactList></ContactList>*/}
          {/* Ejercicio 16,17,18 */}
          {/*<aside>
            <Link to='/'>|| HOME |</Link>
            <Link to='/contacts'>| Contacts |</Link>
            <Link to='/register'>| Register |</Link>
            <Link to='/login'>| Login ||</Link>
          </aside>
          <main>
            <Routes> 
              <Route exact path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/contacts' element={<ContactListPage />} />
            </Routes>
          </main>*/}
          {/* Ejercicio 19,20,21 */}
          {/*<JokeComp></JokeComp>*/}
          {/* Ejercicio 22,23,24 */}
          <TodosContainer></TodosContainer>
          <TodoFormContainer></TodoFormContainer>
          <Filteroptions></Filteroptions>
        </header>
      </div>
    </Router>
  );
}

export default App;
