import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './pages/SignUp/SignUp';
import { SignIn } from './pages/SignIn/SignIn';
import { Dashboard } from './pages/Dashboard/Dashboard';

function App() {
  return (
      <Routes>
        <Route path='/signup' element = { <SignUp/> } exact />
        <Route path='/signin' element = { <SignIn/> } exact />
        <Route path='/dashboard' element = { <Dashboard/> } exact />
      </Routes>
  );
}

export default App;
