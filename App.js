import './App.css';
import {BrowserRouter as Router,
Switch,
Route,
Link
} from 'react-router-dom';
import Home from './components/Home';
import Topics from './components/Topics';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/topics">
              <Topics/>
              </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

