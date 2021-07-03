import Form from "./Form";
import New from "./New";
import Blogs from "./Blogs";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/new">Add New Blog</Link>
            </li>
            <li>
              <Link to="/">Blogs</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Form />
          </Route>
          <Route path="/new">
            <New />
          </Route>
          <Route path="/">
            <Blogs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
