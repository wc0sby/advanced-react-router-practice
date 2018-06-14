import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
          
          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Dashboard 
          </Link>         
         
        </li>
        <li>
           
        <Link to="/charts"> <i className="fa fa-fw fa-dashboard" />
            Charts 
          </Link>
         
        </li>
        <li>
           
        <Link to="/tables"> <i className="fa fa-fw fa-dashboard" />
            Tables 
          </Link>
         
        </li>
        <li>
           
           <Link to="/settings"> <i className="fa fa-fw fa-dashboard" />
               Settings 
             </Link>
            
           </li>
        <li>
        
        <Link to="/wall"> <i className="fa fa-fw fa-dashboard" />
            Wall 
          </Link>
        
        </li>
        <li>
        
        <Link to="/profiles"> <i className="fa fa-fw fa-dashboard" />
            Profiles 
          </Link>
        
        </li>
        <li>
           
        <Link to="/marquee"> <i className="fa fa-fw fa-dashboard" />
            Marquee 
          </Link>
        
        </li>
      </ul>
    </div>);  
}

export default SideNav;
