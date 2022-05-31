import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Code } from "./pages/Code/Code";
import { Hosting } from "./pages/Hosting/Hosting";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`container ${isDarkMode ? "dark" : "light"}`}>
      <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/code">
          <Code />
        </Route>
        <Route path="/hosting">
          <Hosting />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
