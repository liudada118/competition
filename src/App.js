import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {HashRouter, Route} from 'react-router-dom'
// import PersonalCenter from './components/PersonalCenter/PersonalCenter';
// import HomePage from './components/HomePage/HomePage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import FindPwd from './components/Findpwd/FindPwd';
// import Home from './components/home/Home';
import CreateTeam from './components/CreateTeam/CreateTeam'
import PersonalCenter from './components/PersonalCenter/PersonalCenter'
function App() {
  return (
    <div className="App">
      <HashRouter >
        <Route path=" " component={FindPwd} />
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path='/presonalCenter/:id' component={PersonalCenter} />
        <Route path='/home/:id' component={Home}/>
        <Route path='/createTeam/:id' component={CreateTeam} />
      </HashRouter>
    </div>
  );
}

export default App;
