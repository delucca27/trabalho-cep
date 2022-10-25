import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./css/App.css"

import TabDadosDeEndereco from './pages/TabDadosDeEndereco'
import LoginPage from "./pages/LoginPage"
import CadastroPage from "./pages/CadastroPage"
import UserPage from "./pages/UserPage"

export default function () {

  return <>
    <BrowserRouter>
      <Routes>
        <Route index element={ <TabDadosDeEndereco /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/cadastro" element={ <CadastroPage /> } />
        <Route path="/u" element={ <UserPage /> } />
      </Routes>
    </BrowserRouter>
  </>
}