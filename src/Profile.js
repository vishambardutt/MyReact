import React from 'react'
import { useState } from 'react'
function Profile() {
    const [logedIn, setLogedIn] =useState(2)
  return (
    <div>
        <h1>User Profile Loged in</h1>
        { logedIn == 1?
        <h4>Welcome User 1 </h4>
        :logedIn ==2 ?<h4>Welcome User 2</h4>
        :<h4>Welcome User 3</h4>}</div>
  );
}

export default Profile