import './App.css';
import {Button} from "antd-mobile";
import {Route, Router, Routes} from "react-router-dom";
import Bookes from "./pages/books";
import Recommendations from "./pages/Recommendations";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import Setting from "./pages/Setting";
import Chat from "./pages/Chat";
import UserInfo from "./pages/Setting/UserInfo";

function App() {
  return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/reg" element={<Reg/>} />
            <Route path="/books" element={<Bookes/>} />
            <Route path="/setting" element={<Setting/>} />
            <Route path="/chat" element={<Chat/>} />
            <Route path='/userInfo' element={<UserInfo/>}/>
            <Route path="/recommendations" element={<Recommendations/>} />
        </Routes>
  );
}

export default App;
