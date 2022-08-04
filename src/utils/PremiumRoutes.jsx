import { Navigate, Outlet } from 'react-router-dom'

function PremiumRoutes({ children }) {
  const premium = true
  return <div>{premium ? <Outlet /> : <Navigate to='/' />}</div>
}

export default PremiumRoutes
