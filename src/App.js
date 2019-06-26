import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import AppNavbar from './components/layout/AppNavbar'
import Dashboard from './components/layout/Dashboard'
import Repositories from './components/repositories/Repositories'
import Bookmarks from './components/bookmarks/Bookmarks'

// Redux
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/repositories" component={Repositories}/>
            <Route exact path="/bookmarks" component={Bookmarks}/>
          </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
