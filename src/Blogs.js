import React, { useState, useEffect } from "react";

const Blogs = () => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    const namex = localStorage.getItem("Blogs");
    if (namex !== null) {
      console.log("namex");
      setBlogs(JSON.parse(namex));
    }
  }, []);

  const deleteBlogs = () => {
    localStorage.removeItem("Blogs");
    setBlogs([]);
  };

  return (
    <div>
      <button onClick={deleteBlogs}>Delete All Blogs</button>
      {Blogs.map((blog) => {
        return (
          <div key={blog.title || 0}>
            <h3>Title: {blog.title}</h3>
            <p>Content: {blog.content}</p>
            <img className="blogImg" src={`${blog.img}`} alt="blog-img"></img>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
