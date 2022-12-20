import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/HomePage'
import AddPage from './pages/AddPage'
import EditPage from './pages/EditPage'
import PageNotFound from './components/PageNotFound'
import UserTable from './components/userTableList'
import './styles/main.scss'


const App = () => (
  <>
<BrowserRouter>

<Routes >
  <Route path="add" element={<AddPage/>} />
  <Route path="/"  element={<Home />} />
  <Route path="update/:id" element={<EditPage/>} />
  <Route path="*" element={<PageNotFound />} />
  <Route path="dummy" element={<UserTable/>}/>

 

 </Routes>

 </BrowserRouter>



  </>
);

export default App
