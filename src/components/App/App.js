import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@material-ui/core';

function App() {

  return (
    <div className="App">
      <Typography variant='h1' component="h1">The Movies Saga!</Typography>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/details/:id">
          <MovieDetails />
        </Route>
      </Router>
    </div>
  );
}


export default App;
