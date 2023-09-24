import React from 'react'
import Header from './Components/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignIn from './Components/SignInPage/SignIn';
import ToDoHeader from './Components/ToDoHeader/ToDoHeader';
import './App.css'
import ToDoSidebar from './Components/ToDoSidebar/ToDoSidebar';
import Myday from './Components/Myday/Myday';
import Layout from './Components/Layout/Layout';
import Important from './Components/Important/Important';
import Planned from './Components/Planned/Planned';



function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes>
      <Route path='/Todo-list' element={<Header/>}/>
      <Route path="sigin" element={<SignIn/>}/>
        <Route  element={<Layout/>}>

        <Route path='/Imp' element={<Important/>}/>
        <Route path ='/gg' element={<Myday/>}/>
        <Route path ='/plan' element={<Planned/>}/>
        </Route>

       
      </Routes>
      
       
      
      </BrowserRouter>
     
    </div>
  )
}

export default App