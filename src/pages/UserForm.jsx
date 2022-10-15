import { Form, Formik } from "formik";
import { useUsers } from "../Context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UserForm() {
  const { createUsers, getUser, updateUser } = useUsers();
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const cargaUser = async () => {
      if (params._id) {
        const user = await getUser(params._id);
        setUser({
          name: user.name,
          age: user.age,
          email: user.email,
        });
      }
    };
    cargaUser();
  }, []);
  return (
    <div>
      <h1 className="font-sans text-zinc-700 mx-8">{params._id ? "Edit user" : "Create user"}</h1>
      <Formik
        initialValues={user}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
        if(params._id) {
          await updateUser(params._id, values)
        } else {
          await createUsers(values);
        }
        navigate("/")
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="flex flex-col md:justify-center md:items-center sm:block">
            
            <input
            className="p-2 bg-white border shadow rounded w-60 m-2"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.name}
            />

            
            <input
            className="p-2 bg-white border shadow rounded w-20 m-2"
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              value={values.age}
            ></input>

            
            <input
              className="p-2 bg-white border shadow rounded w-89 m-2"
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
            ></input>

            <button type="submit" disabled={isSubmitting} className="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded m-3">
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserForm;
