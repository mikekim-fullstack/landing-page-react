import './App.css';
import Navbar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import Home from './pages';
import SigninPage from './pages/SigninPage';
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
