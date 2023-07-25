import React, { useState, useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [originalTitle, setOriginalTitle] = useState(document.title);

  useEffect(() => {
    document.title = "Awesome Album App";
    return () => {
      document.title = originalTitle;
    };
  }, [originalTitle]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        // Handle error if needed
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="App">
      <div className="left column">
        <UserList users={users} setCurrentUser={setCurrentUser} />
      </div>
      <div className="right column">
        <AlbumList user={currentUser} />
      </div>
    </div>
  );
}

export default App;
