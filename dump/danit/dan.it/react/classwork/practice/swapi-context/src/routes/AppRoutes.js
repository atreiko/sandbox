import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import FilmDetails from '../components/FilmDetails/FilmDetails'
import Films from '../components/Films/Films'
import Login from '../components/Login/Login';

function AppRoutes({ setUser, user }) {
  const isAuth = !!user;

  return (
    <Switch>
      <Redirect exact from='/' to='/films' />
      <Route exact path='/login'>
        <Login setUser={setUser} isAuth={isAuth} />
      </Route>
      <ProtectedRoute exact path='/films' isAuth={isAuth}><Films /></ProtectedRoute>
      <ProtectedRoute exact path='/films/:filmId' isAuth={isAuth}><FilmDetails /></ProtectedRoute>
    </Switch>
  )
}

const ProtectedRoute = ({ children, isAuth, ...rest }) => {
  return <Route {...rest} render={() => {
    if (isAuth) {
      return children
    } else {
      return <Redirect to='/login' />
    }
  }} />
}

export default AppRoutes
