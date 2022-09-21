import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import DashMain from './pages/DashMain';
import Settings from './pages/Settings';

function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='dashboard' element={<Dashboard/>}>
        <Route index element={<DashMain/>} />      
        <Route path="settings" element={<Settings/>} />
    </Route>
    <Route path='*' element={<Login/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
