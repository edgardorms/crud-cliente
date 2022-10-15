import { useEffect } from "react";
import UsersCard from "../components/UsersCard";
import {useUsers} from "../Context/UserContext";

function UsersPage() {
  const { users, loadUsers } = useUsers();

  useEffect(() => {
    
    loadUsers();
  }, []);

  function renderMain() {
    if (users.length === 0) return <h1>No users yet</h1>;
    return users.map((users) => <UsersCard users={users} key={users._id} />)  
    }

    return(
      <div>
        <h1>Users</h1>
        <div>{renderMain()}</div>
      </div>
    )
}

export default UsersPage;
