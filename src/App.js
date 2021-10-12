import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Categories from './components/pages/Categories';
import Countries from './components/pages/Countries';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/categories' exact component={Categories} />
          <Route path='/countries' exact component={Countries} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
