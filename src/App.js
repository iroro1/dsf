import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/dashboard' element={<Dashboard/>}>
        <Route index element={<Dashboard/>} />
    </Route>
    <Route path='*' element={<Login/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
