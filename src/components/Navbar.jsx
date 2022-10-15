import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div>
    <h1>React MongoDB</h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/new'>New</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar