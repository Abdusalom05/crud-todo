import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateUser } from "./UserReducer";

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.user);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];

  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispath(updateUser({
        id: id,
        name: uname,
        email: uemail,
      }));
      navigate('/')
  };
  return (
    <>
      <div className="flex mx-auto justify-center flex-col items-center mt-16 text-blue-500 ">
        <h3 className="text-4xl text-center">Update User</h3>
        <form
          onSubmit={handleUpdate}
          className="w-96 flex flex-col gap-6 mt-8 "
        >
          <div className="">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control input h-9 input-bordered input-primary w-full "
              value={uname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control input h-9 input-bordered input-primary w-full"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-info w-20 h-8">Update</button>
        </form>
      </div>
      <div>
        <Link
          to="/"
          className="fixed right-9 bottom-10  text-2xl flex items-center gap-3"
        >
          {" "}
          <RxExit />
          Back to home
        </Link>
      </div>
    </>
  );
}

export default Update;
