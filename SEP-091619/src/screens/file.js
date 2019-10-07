import React, { Component } from "react";
import UploadForm from "../forms/upload_form";

class File extends Component {
  render() {
    return (
      <div>
        <h1> Fill Details form </h1>

        <UploadForm />
      </div>
    );
  }
}

export default File;
