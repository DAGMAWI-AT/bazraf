import React, { useState } from "react";

const data = [
  {
    id: 1,
    type: "image",
    name: "home image 01",
    title: "Lada Granta",
    disc: "lorem",
  },
  {
    id: 2,
    type: "video",
    name: "home video 01",
    title: "Lada Granta",
    disc: "lorem",
  },
  {
    id: 3,
    type: "content",
    name: "home content 01",
    title: "Lada Granta",
    disc: "lorem",
  },
  // Add more data as needed
  {
    id: 1,
    type: "image",
    name: "home image 01",
    title: "Lada Granta",
    disc: "lorem",
  },
  {
    id: 2,
    type: "video",
    name: "home video 01",
    title: "Lada Granta",
    disc: "lorem",
  },
  {
    id: 3,
    type: "content",
    name: "home content 01",
    title: "Lada Granta",
    disc: "lorem",
  },
  // Add more data as needed
  {
    id: 1,
    type: "image",
    name: "home image 01",
    title: "Lada Granta",
    disc: "lorem",
  },
  {
    id: 2,
    type: "video",
    name: "home video 01",
    title: "Lada Granta",
    disc: "lorem",
  },
  {
    id: 3,
    type: "content",
    name: "home content 01",
    title: "Lada Granta",
    disc: "lorem",
  },
  // Add more data as needed
  {
    id: 1,
    type: "image",
    name: "home image 01",
    title: "Lada Granta",
    disc: "lorem",
  },
  {
    id: 2,
    type: "video",
    name: "home video 01",
    title: "Lada Granta",
    disc: "lorem",
  },
  // Add more data as needed
];

const Cars = () => {
  const [selectedType, setSelectedType] = useState("image");

  const filteredData = data.filter((item) => item.type === selectedType);

  return (
    <div className="container">
      <div className="data-type">
        <button onClick={() => setSelectedType("image")}>Image</button>
        <button onClick={() => setSelectedType("video")}>Video</button>
        <button onClick={() => setSelectedType("content")}>Content</button>
      </div>
      <h1>Cars {selectedType}</h1>
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>{selectedType} Name</th>

              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.title}</td>
                <td>{item.disc}</td>
                <td>
                  <button className="edit-btn">edit</button>
                  <button className="view-btn">view</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cars;
