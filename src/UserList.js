import React from "react";

function UserList({ users, setCurrentUser }) {
  const fontStyle = {
    fontFamily: "Verdana, sans-serif",
  };
  const fontSize = {
    fontSize: "22px"
  };
  
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} style={fontStyle} fontSize={fontSize}>
          <button type="button" onClick={() => setCurrentUser(user)}>
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
