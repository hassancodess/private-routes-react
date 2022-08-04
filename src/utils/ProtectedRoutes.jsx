import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoutes({ children }) {
  const auth = true
  return <div>{auth ? <Outlet /> : <Navigate to='/' />}</div>
}

export default ProtectedRoutes
