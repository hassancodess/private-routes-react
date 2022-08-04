import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/accounts'>Accounts</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
        <li>
          <Link to='/premium'>Premium</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
