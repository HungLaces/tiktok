import { useState, useEffect } from 'react';

function Following() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((postss) => {
        setPosts(postss);
      });
  }, []);

  return (
    <div>
      <h1>Following</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Following;
