import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loading from "../loading.gif";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [page]);

  const totalPage = users?.page * users?.per_page;

  if (users.length === 0) {
    return (
      <div className="loading">
        <img src={loading} alt="" />
      </div>
    );
  }

  console.log(users);

  return (
    <>
      <div className="allUser">
        <div className="container">
          <h1>all users</h1>

          <div className="user-wrapper">
            {users.data?.map((user) => (
              <div className="user">
                <img className="user-avatar" src={user.avatar} alt="" />
                <h4 className="user-name">
                  {user.first_name} {user.last_name}
                </h4>
                <h5 className="user-email">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>{" "}
                  <span>{user.email}</span>
                </h5>
                <button className="user-button">View Profile</button>
              </div>
            ))}
          </div>

          <div className="pagination">
            <Link
              onClick={() => setPage(page - 1)}
              className={`${users.page === 1 && "disabled"}`}
            >
              ← Previous
            </Link>

            <Link
              onClick={() => setPage(page + 1)}
              className={`${users.total === totalPage && "disabled"}`}
            >
              Next→
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
