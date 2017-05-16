import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import {Browserhis}

function App() {
  return (
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        {/* PUT YOUR ROUTES HERE */}
      </div>
    </div>

  );
}


export default App;
