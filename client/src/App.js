import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PetList from './components/PetList';
import PetForm from './components/PetForm';
import EditarPet from './components/EditarPet';
import UnPet from './components/UnPet';
import Registro from './components/Registro';
import Login from './components/Login';

function App() {
  return (
    <div className="App contenido">
     
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/nuevopet' element={<PetForm/>}/>
          <Route path='/unpet/:id' element={<UnPet/>}/>
          <Route path='/editarpet/:id' element={<EditarPet/>}/>
          <Route path='/todospet'element={<PetList/>}/>
          <Route path='/registro'element={<Registro/>}/>
          <Route path='/login'element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
