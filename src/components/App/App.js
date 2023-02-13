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
import { AppBar, Toolbar } from '@mui/material';


function App() {

  const theme = createMuiTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="fixed" >
          <Toolbar className='header'>
            <Typography variant='h1' component="h1" >The Movies Saga!</Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
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
