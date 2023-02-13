import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Typography } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";


function App() {

  const theme = createMuiTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography variant='h1' component="h1" className='header'>The Movies Saga!</Typography>
        <Box className='Main'>
          <Router>
            <Route path="/" exact>
              <MovieList />
            </Route>

            <Route path="/details/:id">
              <MovieDetails />
            </Route>
          </Router>
        </Box>
      </div>
    </ThemeProvider>
  );
}


export default App;
