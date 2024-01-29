import './App.css'
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Login from "./components/Login"
import Dashboard from './components/Dashboard'
import Leads from './components/Leads'
import Accounts from './components/Accounts'
import Deals from './components/Deals'
import PrivateRoutes from './components/PrivateRoutes'

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const isAuthenticated = localStorage.getItem('token');

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Element /> : <Navigate to="/login" replace />}
//     />
//   );
// };

function App() {

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Layout />}>
          <PrivateRoutes path="/" element={<Dashboard />} />
          <PrivateRoutes path="/dashboard" element={<Dashboard />} />
          <PrivateRoutes path="/leads" element={<Leads />} />
          <PrivateRoutes path="/deals" element={<Deals />} />
          <PrivateRoutes path="/accounts" element={<Accounts />} />
        </Route> */}
        {/* <Route path="/" element={<PrivateRoutes />}> */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/accounts" element={<Accounts />} />
        </Route>
      </Routes>

    </div >
  );
};


export default App;