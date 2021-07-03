import React, { useState } from "react";

const New = () => {
  const [Blog, setBlog] = useState({
    title: "",
    content: "",
    img: "",
  });
  const [Msg, setMsg] = useState("");

  const inputChanged = (e) => {
    const { name, value } = e.target;
    setBlog({ ...Blog, [name]: value });
  };
  const fileChanged = (path) => {
    Blog.img = path ? path.name : "";
  };

  const submitAction = (event) => {
    event.preventDefault();
    let allBlogs = [];
    let storedBlogs = localStorage.getItem("Blogs");
    if (storedBlogs !== null) allBlogs = JSON.parse(storedBlogs);
    allBlogs.push(Blog);
    localStorage.setItem("Blogs", JSON.stringify(allBlogs));
    setBlog({
      title: "",
    });
    setMsg(`New Blog: ${Blog.title} added successfully`);
  };

  return (
    <>
      <form onSubmit={submitAction}>
        <div>
          <label>Title: </label>
          <input name="title" type="text" onChange={inputChanged}></input>
        </div>
        <br />
        <div>
          <label>Content: </label>
          <textarea name="content" onChange={inputChanged}></textarea>
        </div>
        <br />
        <div>
          <label>Image: </label>
          <input
            name="img"
            type="file"
            onChange={(e) => {
              fileChanged(e.target.files[0]);
            }}
          ></input>
        </div>
        <br />
        <button>Submit</button>
      </form>
      <div>{Msg}</div>
    </>
  );
};

export default New;
