import './App.css';
import MovieList from './components/MovieList';
import { Redirect, Switch, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/movies' component={MovieList} />
        <Route path='/movies/:id' component={MovieDetails} />
        <Redirect to='/movies' />
      </Switch>
    </div>
  );
}

export default App;
