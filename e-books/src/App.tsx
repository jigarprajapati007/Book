import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './pages/Main';
import { Signup } from './pages/Signup';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />}/>
      <Route path="/assessment" element={<Main />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
