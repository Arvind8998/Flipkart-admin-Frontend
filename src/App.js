import './App.css';
import {Jumbotron} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from './components/Layout/index';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
