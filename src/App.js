import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Dashboard from './components/Dashboard'
import Leads from './components/Leads'
import Accounts from './components/Accounts'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <Layout>
            <Routes>
              <Route path='/dashboard' element={<Dashboard />}></Route>
              <Route path='/leads' element={<Leads />}></Route>
              <Route path='/accounts' element={<Accounts />}></Route>
            </Routes>
          </Layout>
        } />
      </Routes>
    </div>
  );
}

export default App;