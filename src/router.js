import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskTableSKU from "./components/tabelaSKU/TaskTableSKU";
import TaskTableProdutos from "./components/tabelaProdutos/TaskTableProdutos"
import React from 'react'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/skus" element={<TaskTableSKU/>}/>
            <Route path="/produtos" element={<TaskTableProdutos/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router 