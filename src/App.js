import './App.css';
import HomePage from './components/HomePage';
import Form from './components/Form';
import MapClass from './components/Map';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/form">
            <Form />
          </Route>
          <Route exact path="/map">
            <MapClass />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
