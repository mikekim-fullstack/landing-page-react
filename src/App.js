import './App.css';
import Navbar from './components/LandingView//NavBar';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/LandingPage';
import SigninPage from './pages/LandingPage/SigninPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SigninPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
