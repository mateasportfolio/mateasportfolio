import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { CodePage } from "./pages/Code/Code";
import { HostingPage } from "./pages/Hosting/Hosting";
import { IconButton } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";

<IconButton aria-label="Search database" icon={<SearchIcon />} />;
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
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
          <CodePage />
        </Route>
        <Route path="/hosting">
          <HostingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
