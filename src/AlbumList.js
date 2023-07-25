import React, { useEffect, useState } from "react";

function AlbumList({ user = {} }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (user.id) {
      const abortController = new AbortController();

      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`, {
        signal: abortController.signal,
      })
        .then((response) => response.json())
        .then((data) => setAlbums(data))
        .catch((error) => {
          // Handle error if needed
        });

      return () => {
        abortController.abort();
      };
    } else {
      setAlbums([]);
    }
  }, [user]);

  if (!user.id) {
    return <p>Please click on a user name to the left</p>;
  }
  
  const fontStyle = {
    fontFamily: "Verdana, sans-serif",
  };
  
  const headerFontSize = {
    fontSize: "36px"
  }

  const listFontSize = {
    fontSize: "18px"
  }

  return (
    <div>
      <h2 style={fontStyle} fontSize={headerFontSize}>{user.name} Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id} style={fontStyle} fontSize={listFontSize}>
           {album.id} - {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
