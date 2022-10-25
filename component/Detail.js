import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const Detail = () => {
  const [loginData, setloginData] = useState([]);

  const userFullDetails = () => {
    const getuser = localStorage.getItem("getuserData");
    console.log("xyz", getuser);
  };

  useEffect(() => {
    userFullDetails();
  }, []);

  return (
    <>
      <div>
        <h3>Detail</h3>
        <span>please help , ist not working</span>
      </div>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Asif Ali</td>
              <td>aliBro</td>
              <td>@ali</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ankit</td>
              <td>singhamBro</td>
              <td>@singh</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Prateek</td>
              <td>@prtk</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Detail;
