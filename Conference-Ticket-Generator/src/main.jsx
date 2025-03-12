import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Input, Ticket} from "./components"
import {BrowserRouter, Route, Routes} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Input/>} />
              <Route path="/Ticket" element={<Ticket/>} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
