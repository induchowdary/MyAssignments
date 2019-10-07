import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      request: "Sending",
      data: []
    };

    this.updateList();
  }

  updateList() {
    const axios = require("axios");

    this.setState({
      request: "Sending Request"
    });

    axios
      .get("http://localhost:8080/getAllUsers")
      .then(response => {
        this.setState({
          request: "Date Recieved Succesfully",
          data: response.data
        });

        // this.setState((state)=>{
        //   return {
        //     request: "Recieved Successfully",
        //     data : response.data
        //   }
        // })
      })
      .catch(error => {})
      .finally(() => {});
  }

  render() {
    return (
      <div id="state">
        {/* <h1> Contact Us </h1> */}
        {/* <h2>{this.state.request} </h2> */}
        <div className="box">
          <div className="box-body">
            <table className="table table-bordered">
              <tr>
                <th> serial no </th>
                <th> firstName </th>
                <th> lastName </th>
                <th> Email </th>
              </tr>
              <tbody>
                {this.state.data.map((val, index) => {
                  return (
                    <tr>
                      <td> {index + 1} </td>
                      <td> {val.firstName} </td>
                      <td> {val.lastName} </td>
                      <td> {val.email} </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <ol>
          {/* {this.state.link.map(val => (
           <li key={ val.id }>{val.endpoint}</li>
          ))} */}
        </ol>
      </div>
    );
  }
}

export default Contact;
