import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskTableSKU from "./components/tabelaSKU/TaskTableSKU";
import TaskTableProdutos from "./components/tabelaProdutos/TaskTableProdutos"
import UserRegister from "./components/userRegister/UserRegisterForm"
import UserLogin from "./components/userLogin/UserLoginForm"
import React from 'react'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/skus" element={<TaskTableSKU/>}/>
            <Route path="/produtos" element={<TaskTableProdutos/>}/>
            <Route path="/registeruser" element={<UserRegister/>}/>
            <Route path="/loginuser" element={<UserLogin/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router 