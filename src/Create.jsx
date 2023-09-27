import React from "react";

import { useState } from "react";
import { RxExit } from "react-icons/rx";

import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.user);

  console.log(users);

  const dispath = useDispatch();
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
    dispath(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate('/')
  };
  return (
    <>
      <div className="flex mx-auto justify-center flex-col items-center mt-16 text-blue-500 ">
        <h3 className="text-4xl text-center">Add New User</h3>
        <form
          className="w-96 flex flex-col gap-6 mt-8 "
          onSubmit={handleSubmit}
        >
          <div className="">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control input h-9 input-bordered input-primary w-full"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control input h-9 input-bordered input-primary w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-info w-20 h-8">Submit</button>
        </form>
      </div>
      <div>
        <Link
          to="/"
          className="fixed right-9 bottom-10 text-2xl flex items-center gap-3"
        >
          {" "}
          <RxExit />
          Back to home
        </Link>
      </div>
    </>
  );
}

export default Create;
