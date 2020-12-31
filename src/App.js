import React from "react";
import "./App.css";
import Header from "./Header"
import LeftSidebar from "./LeftSidebar"
import Feed from "./Feed"
import Login from "./Login"
import {useStateValue} from "./StateProvider"

// import Widgets from "./Widgets"

function App() {  
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
        <Header />
        
        <div className="app_body">
          <LeftSidebar />
          <Feed/>
        </div>
        </>
      )}
      

      
    </div>
  );
}

export default App;
