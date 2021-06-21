import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Greeting from "./components/Greeting";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/global/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Benne", "serif"].join(","),
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar theme={theme} />
        <Switch>
          {/* <Route path="/" component={Greeting} /> */}
          <Route path="/" component={Homepage} />
          <Route path="/aboutkrissy" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
