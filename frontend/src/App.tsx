import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Directories from './components/Directories/Directories'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'
import Login from './components/Forms/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path='/content/' 
        element={
          <div>
            <HeaderMenu />
            <Directories />
          </div>
        } />
        <Route 
          path='/content/:path'
          element={
            <div>
              <HeaderMenu />
              <Directories />
            </div>
          }
        />
        <Route
          path="/login/"
          element={
            <Login />
          }
        />
        <Route
          path='/register/'
          element={
            <Login />
          }
        />
        <Route 
          path='/' 
          element={<Navigate replace to="login" />} 
        />
        <Route 
          path="*" 
          element={
            <div className="text-white text-center px-10 py-2 mb-4 border-2 border-red-800 rounded-md bg-red-500">
              Not found
            </div>
        }/>
      </Routes> 
    </Router>
  )
}

export default App
