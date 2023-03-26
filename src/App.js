import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import MovieDetailsComponent from './components/MovieDetailsComponent'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/details/:id">
          <MovieDetailsComponent />
        </Route>
        <Route exact path="/not-found">
          <NotFound />
        </Route>
        <Redirect to="not-found" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
