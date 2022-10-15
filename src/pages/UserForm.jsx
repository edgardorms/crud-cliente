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
      <h1>{params._id ? "Edit user" : "Create user"}</h1>
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
          <Form onSubmit={handleSubmit}>
            <label>name</label>
            <input
              type="text"
              name="name"
              placeholder="write a title"
              onChange={handleChange}
              value={values.name}
            />

            <label>age</label>
            <input
              type="number"
              name="age"
              placeholder="write a age"
              onChange={handleChange}
              value={values.age}
            ></input>

            <label>email</label>
            <input
              type="text"
              name="email"
              placeholder="write a email"
              onChange={handleChange}
              value={values.email}
            ></input>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserForm;
