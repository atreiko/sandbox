import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Inbox from '../pages/Inbox/Inbox'
import Favorites from '../pages/Favorites/Favorites'
import Sent from '../pages/Sent/Sent'
import Page404 from '../pages/Page404/Page404'
import OneEmail from '../pages/OneEmail/OneEmail'
import Login from '../pages/Login/Login'
import { getUserSelector } from '../store/user/selectors'
import { connect } from 'react-redux'

function AppRoutes({ user }) {
  const isAuth = !!user;

  return (
    <Switch>
      <Redirect exact from='/' to='/inbox' />
      <Route exact path='/login'>
        <Login isAuth={isAuth} />
      </Route>
      <ProtectedRoute exact path='/inbox' isAuth={isAuth}>
        <Inbox />
      </ProtectedRoute>
      <ProtectedRoute exact path='/favorites' isAuth={isAuth}><Favorites /></ProtectedRoute>
      <ProtectedRoute exact path='/sent' isAuth={isAuth}><Sent /></ProtectedRoute>
      <ProtectedRoute exact path='/emails/:emailId' isAuth={isAuth}><OneEmail /></ProtectedRoute>
      <Route path='*'><Page404 /></Route>
    </Switch>
  )
}

const ProtectedRoute = ({children, isAuth, ...rest}) => {
  return <Route {...rest} render={() => {
    if (isAuth) {
      return children
    } else {
      return <Redirect to='/login' />
    }
  }} />
}

const mapStateToProps = (state) => {
  return {
    user: getUserSelector(state)
  }
}

export default connect(mapStateToProps)(AppRoutes)