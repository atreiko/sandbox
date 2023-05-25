import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import FilmDetails from '../components/FilmDetails/FilmDetails'
import Films from '../components/Films/Films'

function AppRoutes() {
  return (
    <Switch>
      <Redirect exact from='/' to='/films' />
      <Route exact path='/films'><Films /></Route>
      <Route exact path='/films/:filmId'><FilmDetails /></Route>
    </Switch>
  )
}

export default AppRoutes
