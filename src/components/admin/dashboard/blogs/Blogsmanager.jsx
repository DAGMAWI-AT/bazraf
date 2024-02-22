import React, { useState } from "react";
import Modal from "react-modal";
import { postData } from "../../data/Data";
import "./Board.css";

const BlogPost = ({ post, onDelete, onView, onEdit }) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedPost, setEditedPost] = useState({ ...post });

  const handleDelete = () => {
    setDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    onDelete(post.id);
    setDeleteConfirmation(false);
  };

  const handleEdit = () => {
    setEditedPost({ ...post });
    setEditModalOpen(true);
  };

  const handleEditSave = () => {
    onEdit(editedPost);
    setEditModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleView = () => {
    onView(post);
  };

  return (
    <tr>
      <td>{post.id}</td>
      <td>
        {post.img ? (
          <img src={post.img} alt="Post" style={{ width: "50px" }} />
        ) : null}
      </td>
      <td>{post.ttl}</td>
      <td
        onClick={() => {
          handleView(); // Call handleView when description is clicked
        }}
        style={{ cursor: "pointer" }}
      >
        {`${post.dsc.slice(0, 50)}...`}
      </td>
      <td>{post.mln}</td>
      <td>
        <button onClick={handleView}>View</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </td>

      {/* Delete confirmation modal */}
      <Modal
        isOpen={deleteConfirmation}
        onRequestClose={() => setDeleteConfirmation(false)}
        ariaHideApp={false}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            height: "100%",
          }}
        >
          <h2>Delete Confirmation</h2>
          <p style={{ color: "red", fontSize: "20px" }}>
            Are you sure you want to delete this post?
          </p>

          <div>
            <button onClick={handleConfirmDelete}>Yes</button>
            <button onClick={() => setDeleteConfirmation(false)}>No</button>
          </div>
        </div>
      </Modal>

      {/* Edit post modal */}
      <Modal
        isOpen={editModalOpen}
        onRequestClose={() => setEditModalOpen(false)}
        ariaHideApp={false}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            height: "100%",
          }}
        >
          <h2>Edit Post</h2>
          <div>
            <label style={{ fontSize: "30px", marginRight: "10px" }}>
              Title of the post:
            </label>
            <input
              type="text"
              name="ttl"
              value={editedPost.ttl}
              onChange={handleInputChange}
              style={{
                border: "2px solid rgba(0,0,0,0.5)",
                padding: "5px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",

              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <label style={{ fontSize: "30px", marginRight: "10px" }}>
              Description:
            </label>

            <textarea
              name="dsc"
              value={editedPost.dsc}
              onChange={handleInputChange}
              rows={10}
              cols={120}
              style={{
                padding: "10px",
                fontSize: "16px",
                textWrap: "wrap",
                border: "2px solid rgba(0,0,0,0.5)",
                padding: "5px",
                borderRadius: "10px",
              }}
            />
          </div>{" "}
          <div>
            <label style={{ fontSize: "30px", marginRight: "10px" }}>
              Image Path:
            </label>
            <input
              type="text"
              name="img"
              value={editedPost.img}
              onChange={handleInputChange}
              style={{
                border: "2px solid rgba(0,0,0,0.5)",
                padding: "5px",
                borderRadius: "10px",
              }}
            />
          </div>{" "}
          <div>
            <button onClick={handleEditSave}>Save</button>
            <button onClick={() => setEditModalOpen(false)}>Cancel</button>
          </div>
        </div>
      </Modal>
    </tr>
  );
};

const BlogAdmin = () => {
  const [posts, setPosts] = useState(postData);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [viewedPost, setViewedPost] = useState({});
  const [addModalOpen, setAddModalOpen] = useState(false); // State for "Add New Blog" modal
  const [newPost, setNewPost] = useState({ ttl: "", dsc: "", img: "" });

  const handleAddModalOpen = () => {
    setAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setAddModalOpen(false);
    setNewPost({ ttl: "", dsc: "", img: "" }); // Reset new post data
  };

  const handleAddNewPost = () => {
    const newId = posts.length + 1;
    const updatedPosts = [...posts, { id: newId, ...newPost }];
    setPosts(updatedPosts);
    handleAddModalClose();
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleView = (post) => {
    setViewedPost(post);
    setViewModalOpen(true);
  };

  const handleCloseView = () => {
    setViewModalOpen(false);
  };

  const handleEdit = (editedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === editedPost.id ? editedPost : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div style={{ width: "100%", height: "100vh", overflowY: "scroll" }}>
      {/* "Add New Blog" button */}
      <button
        onClick={handleAddModalOpen}
        style={{
          width: "80%",
          height: "70px",
          margin: "3%   10%  ",
          fontSize: "26px",
          color: "gold",
        }}
      >
        Post New Blog
      </button>

      {/* Add New Blog Modal */}
      <Modal
        isOpen={addModalOpen}
        onRequestClose={handleAddModalClose}
        ariaHideApp={false}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            height: "100%",
          }}
        >
          <h2>Add New Blog</h2>
          <div>
            <label style={{ fontSize: "30px", marginRight: "10px" }}>
              Title:
            </label>
            <input
              type="text"
              value={newPost.ttl}
              onChange={(e) => setNewPost({ ...newPost, ttl: e.target.value })}
              style={{
                border: "2px solid rgba(0,0,0,0.5)",
                padding: "5px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <label style={{ fontSize: "30px", marginRight: "10px" }}>
              Description:
            </label>
            <textarea
              value={newPost.dsc}
              onChange={(e) => setNewPost({ ...newPost, dsc: e.target.value })}
              rows={10}
              cols={120}
              style={{
                padding: "10px",
                fontSize: "16px",
                textWrap: "wrap",
                border: "2px solid rgba(0,0,0,0.5)",
                padding: "5px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div>
            <label style={{ fontSize: "30px", marginRight: "10px" }}>
              Image Path:
            </label>
            <input
              type="text"
              value={newPost.img}
              onChange={(e) => setNewPost({ ...newPost, img: e.target.value })}
              style={{
                border: "2px solid rgba(0,0,0,0.5)",
                padding: "5px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div>
            <button onClick={handleAddNewPost}>Add Post</button>
            <button onClick={handleAddModalClose}>Cancel</button>
          </div>
        </div>
      </Modal>
      <h1 style={{ fontSize: "20px", color: "orangeb" }}>Blog List</h1>
      <table title="blog list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Likes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <BlogPost
              key={post.id}
              post={post}
              onDelete={handleDelete}
              onView={handleView}
              onEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>

      {/* View post modal */}
      <Modal
        isOpen={viewModalOpen}
        onRequestClose={handleCloseView}
        ariaHideApp={false}
        contentLabel="View Post"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "grey",
            margin: "0%   0% 0% 0% !important",
            padding: "0%   0% 0% 0% !important",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <h2 style={{ color: "rgb(39, 62, 139)" }}>{viewedPost.ttl}</h2>
          {viewedPost.img && (
            <img
              src={viewedPost.img}
              alt="Post"
              style={{ width: "20%", borderRadius: "15px" }}
            />
          )}
          <p style={{ width: "75%", color: "black" }}>{viewedPost.dsc}</p>
          <button onClick={handleCloseView}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default BlogAdmin;
