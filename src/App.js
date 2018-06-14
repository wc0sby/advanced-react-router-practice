import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Dashboard from './components/Dashboard'
import Chart from './components/Charts'
import Tables from './components/Tables'
import Settings from './components/Settings'
import Wall from './components/Wall'
import Profiles from './components/Profiles'
import Marquee from './components/Marquee'
import Profile from './components/Profile'

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom"


function App() {
  return (
    <div> 
      <BrowserRouter>
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div style={{backgroundColor: "white"}}>
          <Switch>
            {/* This indicates the root path */}
            <Route path="/charts" component={Chart} />
            <Route path="/tables" component={Tables} />
            <Route path="/settings" component={Settings} />
            <Route path="/wall" component={Wall} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/marquee/:text" component={Marquee} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/" component={Dashboard} /> 
            </Switch>
        </div>
      </div>
        </BrowserRouter>
    </div>

  );
}


export default App;
