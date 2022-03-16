import React, { useState, useEffect, createContext, useContext } from 'react';

import { connect } from 'react-redux'
import {GetReposAction,ClearReposAction} from './actions/repoActions'
import {GetOrgsAction,ClearOrgsAction} from './actions/orgActions'
import { AppContext } from './Contexts';
import Dashboard from './pages/dashboard/Dashboard'


export const App = (props) => {
  
 
  return (
    <AppContext.Provider value={props}>
      <Dashboard />
    </AppContext.Provider>
  )
}

const mapStateToProps = (state) => {
  return{
    myCount:state.counter,
    repo:state.repo
  }
  
}

const mapDispatchToProps = {GetReposAction,ClearReposAction,ClearOrgsAction,GetOrgsAction}

export default connect(mapStateToProps, mapDispatchToProps)(App)