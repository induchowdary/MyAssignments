import React, { Component } from "react";
import MessageIcon from "../components/topnav/message";
import NotificationIcon from "../components/topnav/notification";
import TaskIcon from "../components/topnav/task";

class Topnav extends Component {
  getMsgsList() {
    var MsgArr = [
      {
        title: "Title 1",
        description: "Description 1",
        time: "1 min",
        image:
          "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
      },
      {
        title: "Title 2",
        description: "Description 2",
        time: "2 min",
        image:
          "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
      },
      {
        title: "Title 1",
        description: "Description 1",
        time: "2 min",
        image:
          "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
      },
      {
        title: "Title 4",
        description: "Description 4",
        time: "4 min",
        image:
          "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
      }
    ];

    return MsgArr;
  }

  getNotificationList() {
    var arr = [
      {
        notification: "message 1",
        icon: "fa-thermometer-half"
      },
      {
        notification: "message 2",
        icon: "fa-eye"
      }
    ];

    return arr;
  }

  getTasks() {
    var arr = [
      {
        tasks: "task 1",
        percentage: 20
      },
      {
        tasks: "task 2",
        percentage: 80
      }
    ];

    return arr;
  }

  render() {
    return (
      <header className="main-header">
        {/* Logo */}
        <a href="../../index2.html" className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini">
            <b>A</b>LT
          </span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg">
            <b>Payroll</b>Calc
          </span>
        </a>
        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <a
            href="#"
            className="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <MessageIcon messagesList={this.getMsgsList()} />

              {/* Notifications: style can be found in dropdown.less */}
              <NotificationIcon
                notificationsList={this.getNotificationList()}
              />
              {/* Tasks: style can be found in dropdown.less */}

              <TaskIcon taskList={this.getTasks()} />

              {/* User Account: style can be found in dropdown.less */}
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src={this.props.userDetails.image}
                    className="user-image"
                    alt="User Image"
                  />
                  <span className="hidden-xs">
                    {this.props.userDetails.fullname}
                  </span>
                </a>
                <ul className="dropdown-menu">
                  {/* User image */}
                  <li className="user-header">
                    <img
                      src={this.props.userDetails.image}
                      className="img-circle"
                      alt="User Image"
                    />
                    <p>
                      {this.props.userDetails.fullName} -
                      {this.props.userDetails.designation}
                      <small>{this.props.userDetails.since}</small>
                    </p>
                  </li>
                  {/* Menu Body */}
                  <li className="user-body">
                    <div className="row">
                      <div className="col-xs-4 text-center">
                        <a href="#">Followers</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#">Sales</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#">Friends</a>
                      </div>
                    </div>
                    {/* /.row */}
                  </li>
                  {/* Menu Footer*/}
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">
                        Profile
                      </a>
                    </div>
                    <div className="pull-right">
                      <a href="#" className="btn btn-default btn-flat">
                        Sign out
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
              {/* Control Sidebar Toggle Button */}
              <li>
                <a href="#" data-toggle="control-sidebar">
                  <i className="fa fa-gears" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Topnav;
