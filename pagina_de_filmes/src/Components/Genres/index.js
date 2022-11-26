import React from "react";
import { Outlet, Link } from "react-router-dom";

import  "./styles.css";

export default () => {
    return(
        <div className="genres">
            
            <ul >
                <li> <Link to="/action" > Ação  </Link> </li>
                <li> <Link to="/comedy" > Comédia  </Link> </li>
                <li> <Link to="/documentary"> Documentários </Link></li>
                <li> <Link to="/horror"> Terror  </Link> </li>
                <li> <Link to="/romance"> Romance  </Link> </li>
                <Outlet />
            </ul>
        </div>

    )
}