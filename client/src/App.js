import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/loginpage';
import RegisterPage from './pages/registerpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
