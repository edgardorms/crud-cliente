import {useUsers} from '../Context/UserContext'
import {useNavigate} from 'react-router-dom'

function UsersCard({ users }) {

  const{deleteUsers} = useUsers()
  const navigate = useNavigate()
  return (
    <div>
      <h2>{users.name}</h2>
      <h3>edad: {users.age}</h3>
      <h3>mail: {users.email}</h3>
      <button onClick={() => deleteUsers(users._id)}>Delete</button>
      <button onClick={()=> navigate(`/edit/${users._id}`)}>Editar</button>
    </div>
  );
}

export default UsersCard;
