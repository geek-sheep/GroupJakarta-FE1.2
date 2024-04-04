import React from 'react'
import { Link } from "react-router-dom";

import "./navstyles.css"

function Nav() {
  return (
    <div>
      
        <nav className="nav">

            <div className="left">
                <ul>
                    <li>
                    <Link to="/effect" className="link">Effect</Link>
                    </li>
                    <li>
                        <Link to="/map" className="link">Map</Link>
                    </li>
                    <li>
                        <Link to="/hooks" className="link">Hooks</Link>
                    </li>
                    <li> 
                     <Link to="/justin-jorgson-dela-pena" className="link">Justin Jorgson Dela Pena</Link>
                    </li>
                    <li>
                    <Link to="/vallesteros" className="link">Kismet Pearl D. Vallesteros</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav
