import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit(e) {
    console.log(this.state);
  }

  render() {
    return (
      <div className="box box-info">
        <div className="box-header">
          <h3 className="box-title"> User Details</h3>
        </div>
        <div className="box-body">
          {/* Color Picker */}
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={e => this.handleChange(e)}
              type="Email"
              name="email"
              value={this.state.email}
              className="form-control my-colorpicker1 colorpicker-element"
            />
          </div>
          {/* /.form group */}
          {/* Color Picker */}
          <div className="form-group">
            <label>User Name</label>
            <div className="input-group my-colorpicker2 colorpicker-element">
              <input
                onChange={e => this.handleChange(e)}
                type="text"
                name="userName"
                value={this.state.userName}
                className="form-control"
              />
              <div className="input-group-addon">
                <i />
              </div>
            </div>
            {/* /.input group */}
          </div>
          {/* /.form group */}
          {/* time Picker */}

          <div className="form-group">
            <label>Password</label>
            <div className="input-group">
              <input
                onChange={e => this.handleChange(e)}
                type="password"
                className="form-control timepicker"
                name="password"
                value={this.state.password}
              />
            </div>
            {/* /.input group */}
          </div>
          {/* /.form group */}
          <button
            onClick={e => this.submit(e)}
            className="btn btn-primary btn-lg pull-right"
          >
            Submit
          </button>
        </div>
        {/* /.box-body */}
      </div>
    );
  }
}

export default UserForm;
