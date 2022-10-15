import { useUsers } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function UsersCard({ users }) {
  const { deleteUsers } = useUsers();
  const navigate = useNavigate();
  return (
    <div class="grid col-span-4 relative">
      <a
        class="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9"
        href=""
      >
        <p class="text-2xl font-bold text-gray-500 group-hover:text-gray-700">
          {" "}
          {users.name} {users.age}{" "}
        </p>
        <p class="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6">
          {" "}
          {users.email}
        </p>
        <div class="bg-blue-400 group-hover:bg-blue-600 h-full w-4 absolute top-0 left-0">
          {" "}
        </div>
        <button
          className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          onClick={() => navigate(`/edit/${users._id}`)}
        >
          Edit
        </button>
        <button
          className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
          onClick={() => deleteUsers(users._id)}
        >
          Delete
        </button>
      </a>
    </div>
  );

  {
    /* <div className="flex justify-between">
      <h2>{users.name}</h2>
      <h3>edad: {users.age}</h3>
      <h3>mail: {users.email}</h3>
      <div>
        {" "}
        <button
          className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
          onClick={() => deleteUsers(users._id)}
        >
          Delete
        </button>
        <button
          className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          onClick={() => navigate(`/edit/${users._id}`)}
        >
          Edit
        </button>
      </div>
    </div> */
  }
}

export default UsersCard;
