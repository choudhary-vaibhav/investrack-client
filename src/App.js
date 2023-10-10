import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './pages/SignUp/SignUp';
import { SignIn } from './pages/SignIn/SignIn';

function App() {
  return (
      <Routes>
        <Route path='/signup' element = { <SignUp/> } exact />
        <Route path='/signin' element = { <SignIn/> } exact />
      </Routes>
  );
}

export default App;
