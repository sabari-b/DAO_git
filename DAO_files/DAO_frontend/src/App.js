import logo from './logo.svg';
import './App.css';
// import '../src/assets/css/dashboard.css'
import '../src/assets/css/style.css'
import Home from '../src/seperate/home'

import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom';
import Dashboard from './seperate/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TwitterCallback from './seperate/TwitterCallback';



function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
     
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/callback' element={<TwitterCallback />} />
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
          <Route exact path="/dashboard/socialstask" element={<Dashboard />} />
          <Route exact path="/dashboard/crypto" element={<Dashboard />} />
          <Route exact path="/dashboard/staking-reward" element={<Dashboard />} />
          <Route exact path="/dashboard/leader-board" element={<Dashboard />} />
          <Route exact path="/dashboard/my-account" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
