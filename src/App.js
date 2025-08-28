import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Page Components
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'

// styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/create' component={Create} />
          <Route path='/search' component={Search} />
          <Route path='/recipes/:id' component={Recipe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
