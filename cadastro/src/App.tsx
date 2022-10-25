import { BrowserRouter, Routes, Route } from "react-router-dom"

import TabDadosDeEndereco from './pages/TabDadosDeEndereco'
import LoginPage from "./pages/LoginPage"
import "./css/App.css"

export default function () {

  return <>
    <BrowserRouter>
      <Routes>
        <Route index element={ <TabDadosDeEndereco /> } />
        <Route path="/login" element={ <LoginPage /> } />
      </Routes>
    </BrowserRouter>
  </>
}