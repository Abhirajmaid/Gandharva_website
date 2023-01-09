import React, { useState } from "react";
import "./style.css";
import { db } from "../../Firebase";

const Admin = () => {
  const [data, setData] = useState({});
  const getData = () => {
    db.collection("user")
      .get()
      .then((querySnapshot) => {
        var users = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
        setData(users);
        console.log(data[2].name);
        // console.log(typeof users);
        // console.log(querySnapshot);
      });
  };
  return (
    <>
      <div className="page_container">
        <h1 className="title">ADMIN DASHBOARD</h1>
        <div className="admin_container">
          <button onClick={() => getData()}>Get Data</button>
        </div>
        {/* <div>{data[2]}</div> */}
      </div>
    </>
  );
};

export default Admin;
