import React from 'react';
import { Link} from 'react-router-dom';
const PageNotFound = () => {
    return (
        <div>
            <h1>404 Error</h1>
            <h1>Page Not Found</h1>
           
            <Link to="/">Go to Home</Link>
      </div >
    )
  
}



export default PageNotFound;