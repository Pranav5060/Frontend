import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";
import Register from './components/Register';
import Landing from './components/Landing';
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route exact path="/Login" element={<Login/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Register" element={<Register/>} />
    </Routes>
  </Router>
  );
}

export default App;
