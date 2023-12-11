
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [userName,setUserName] = useState("");
  return (
    <div>
        {
          /* Do not remove the main div */
          /* empty fragments  */
          <> 
          <form action="">
            <input type="text" onChange={(e)=>setUserName(e.target.value)}/>
          </form>
          <p>Hello {userName}!</p>
          </>
        }
    </div>
  )
}

export default App
