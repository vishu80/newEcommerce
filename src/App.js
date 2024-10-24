import logo from "./logo.svg";
import "./App.css";
import { Headers } from "./Components/Headers/Headers";
import { Body } from "./Components/Body/Body";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import userData from "./Components/useContext/userData";
import { Provider } from "react-redux";
import Appstore from "./Utils/appStore";
function App() {
  const [authstatus, setauthstatus] = useState({name:'vishal',email:'vishal@gmail.com'});

  
  return (
    <>
      <Provider store={Appstore}>
      <div className="mainContainer">
        <userData.Provider value={{authstatus,setauthstatus}}>
        <Headers />
        <Outlet/>
        {/* <Body /> */}
        </userData.Provider>
      </div>
      </Provider>
    </>
  );
}

export default App;
