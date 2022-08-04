import ProtectedRoutes from './utils/ProtectedRoutes'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Accounts from './pages/Accounts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Premium from './pages/Premium'
import PremiumRoutes from './utils/PremiumRoutes'
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' exact />
          <Route element={<ProtectedRoutes />}>
            <Route element={<Cart />} path='cart' />
            <Route element={<Accounts />} path='accounts' />
            <Route element={<PremiumRoutes />}>
              <Route element={<Premium />} path='premium' />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
