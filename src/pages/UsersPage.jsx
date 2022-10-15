import { useEffect } from "react";
import UsersCard from "../components/UsersCard";
import { useUsers } from "../Context/UserContext";

function UsersPage() {
  const { users, loadUsers } = useUsers();

  useEffect(() => {
    loadUsers();
  }, []);

  function emptyList() {
  if (users.length === 0)
  return <h1 className="text-4xl text-gray-700 font-bold text-center">No users yet</h1>;
}

  function renderMain() {
    if (users.length > 0) 
    return users.map((users) => <UsersCard users={users} key={users._id} />);
  }

  return (
    <div className="h-screen bg-gray-100">
      <div className="flex justify-center">{emptyList()}
        <div className="grid grid-cols-1  max-w-5xl gap-4 md:grid-cols-8 lg:grid-cols-12">{renderMain()}</div>
      </div>
    </div>
  );
}

export default UsersPage;
