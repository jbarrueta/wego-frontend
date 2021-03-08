import "./App.css";
import { Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";

function App() {
  return (
    <div className="app pa2">
      {/* <Route exact path="/" component={LandingPage} /> */}
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
    </div>
  );
}

export default App;
