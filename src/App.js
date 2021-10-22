import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Categories from './components/pages/Categories';
import Countries from './components/pages/Countries';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

const LightTheme = {
  navbarColor: "grey",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  navbarColor: "linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)",
  titleColor: "#lightpink",
  tagLineColor: "lavender"
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <Router>
          <Navbar theme={theme} setTheme={setTheme} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/categories' exact component={Categories} />
            <Route path='/countries' exact component={Countries} />
          </Switch>
        </Router>
      </ThemeProvider>

    </>
  );
}

export default App;
