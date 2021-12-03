import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import {Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddContact from "./Components/AddContact";
import EditContact from "./Components/EditContact";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add">
          <AddContact />
        </Route>
        <Route path="/edit/:id">
          <EditContact />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
