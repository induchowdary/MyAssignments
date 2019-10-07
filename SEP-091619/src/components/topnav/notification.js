import React, { Component } from "react";

class NotificationIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.notifications = this.props.notificationsList;
    console.log(this.notifications);
  }
  render() {
    return (
      <li className="dropdown notifications-menu">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <i className="fa fa-bell-o" />
          <span className="label label-warning">
            {this.notifications.length}
          </span>
        </a>
        <ul className="dropdown-menu">
          <li className="header">
            You have {this.notifications.length} notifications
          </li>
          <li>
            {/* inner menu: contains the actual data */}
            <ul className="menu">
              {this.notifications.map(function(val, i) {
                return (
                  <li>
                    <a href="#">
                      <i className={"fa text-aqua " + val.icon} />
                      {val.notification}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="footer">
            <a href="#">View all</a>
          </li>
        </ul>
      </li>
    );
  }
}

export default NotificationIcon;
