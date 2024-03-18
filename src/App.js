import './App.css'
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Login from "./components/Login"
import Dashboard from './components/Dashboard'
import Leads from './components/Leads'
import Accounts from './components/Accounts'
import Deals from './components/Deals'
import PrivateRoutes from './components/PrivateRoutes'
import { MessageModalDataProvider } from './context/MessageModalContext'
import { DataControlsProvider } from './context/DataControlsContext'
import { SidebarControlProvider } from './context/SidebarControlContext'
import { SkeletonTheme } from 'react-loading-skeleton'

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
    <MessageModalDataProvider>
      <DataControlsProvider>
        <SidebarControlProvider>
          <SkeletonTheme baseColor="#192239" highlightColor="#263356">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<PrivateRoutes />}>
                <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/leads" element={<Leads />} />
                  <Route path="/deals" element={<Deals />} />
                  <Route path="/accounts" element={<Accounts />} />
                </Route>
              </Route>
            </Routes>
          </SkeletonTheme>
        </SidebarControlProvider>
      </DataControlsProvider>
    </MessageModalDataProvider>
  );
};


export default App;