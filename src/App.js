import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Categories from './components/pages/Categories';
import Countries from './components/pages/Countries';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Meal from './components/pages/Meal';
import Filter from './components/pages/Filter';

const LightTheme = {
  backgroundColor: "grey",
  titleColor: "linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)",
  tagLineColor: "black"
};

const DarkTheme = {
  backgroundColor: "linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)",
  titleColor: "white",
  textColor: "rgb(198, 154, 209)",
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
            <Route theme={theme} setTheme={setTheme} path='/' exact component={Home} />
            <Route theme={theme} setTheme={setTheme} path='/categories' exact component={Categories} />
            <Route theme={theme} setTheme={setTheme} path='/filter/:key' exact component={Filter} />
            <Route theme={theme} setTheme={setTheme} path='/countries' exact component={Countries} />
            <Route theme={theme} setTheme={setTheme} path='/meal/:id' exact component={Meal} />
          </Switch>
        </Router>
      </ThemeProvider>

    </>
  );
}

export default App;
