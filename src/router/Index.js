import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from '../components/editUser/EditUser';
import Form from '../components/form/Form';
import Table from '../components/table/Table';

const Index = () => {
    return (
        <>
          <BrowserRouter>  
              <Routes>
                  <Route path="/" element={<Table />}/>
                  <Route path="/users/add" element={<Form />}/>
                  <Route path="/users/edit/:id" element={<EditUser />}/>
              </Routes>
          </BrowserRouter>  
        </>
    )
}

export default Index