import './App.css'
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Login from "./components/Login"
import Dashboard from './components/Dashboard'
import Leads from './components/Leads'
import Accounts from './components/Accounts'
import Deals from './components/Deals'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/accounts" element={<Accounts />} />
        </Route>
      </Routes>

    </div >
  );
}

export default App;