import React from 'react';
import {Routes, Route} from 'react-router-dom';
import UserPage from './pages/UsersPage';
import UserForm from './pages/UserForm';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import {UserContextProvider} from './Context/UserContext';

function App() {
  return (<div className='bg-gray-100 h-screen'>

  
     <UserContextProvider>
    <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<UserPage/>}/>
      <Route path='/new' element={<UserForm/>}/>
      <Route path='/edit/:_id' element={<UserForm/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </UserContextProvider>
    </div>
  )
}

export default App