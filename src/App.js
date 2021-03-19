import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import UseCases from "./components/pages/UseCases";
import References from "./components/pages/References";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/useCases" component={UseCases} />
            <Route path="/references" component={References} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
