import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/Authentication/Authentication";
import Home from "./components/Home/Home";
import MachineStatus from "./components/MachineStatus/MachineStatus";
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/machine-status" element={<MachineStatus/>}/>
        <Route path="/authenticate" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;