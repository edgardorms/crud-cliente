import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-gray-100 flex flex-col justify-between sm:flex-row">
      <h1 className="px-4 py-2 m-8 text-green-500 font-extrabold flex justify-center">React MongoDB</h1>
<div className="flex justify-center">
      <Link to="/"
        type="button" 
        class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-8 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      > Home
        
      </Link>

      <Link
        to="/new"
        type="button"
        class="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-8 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
      > New User
        
      </Link>
      </div>
    </div>
  );
}

export default Navbar;
