import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css'

function Home() {
  const dispath = useDispatch();
  const users = useSelector((state) => state.user);
  const handleDelete = (id) => {
    dispath(deleteUser({ id: id }));
  };

  return (
      <div className=" App container mx-auto mt-7">
        <Header />

        <main>
          <Link to="/create" className="btn btn-secondary mb-8">
            Create +
          </Link>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="text-xl">
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td className="flex gap-2">
                      <Link to={`/edit/${user.id}`} className="btn btn-primary">
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="btn btn-secondary"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default Home;
