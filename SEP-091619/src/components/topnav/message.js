import React, { Component } from "react";

class MessageIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.messages = this.props.messagesList;
    console.log(this.messages);
  }
  render() {
    return (
      <li className="dropdown messages-menu">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <i className="fa fa-envelope-o" />
          <span className="label label-success">4</span>
        </a>
        <ul className="dropdown-menu">
          <li className="header">You have {this.messages.length} messages</li>
          <li>
            {/* inner menu: contains the actual data */}
            <ul className="menu">
              {this.messages.map(function(val, i) {
                return (
                  <li key={i}>
                    {/* start message */}
                    <a href="#">
                      <div className="pull-left">
                        <img
                          src={val.image}
                          className="img-circle"
                          alt="User Image"
                        />
                      </div>
                      <h4>
                        {val.title}
                        <small>
                          <i className="fa fa-clock-o" /> {val.time}
                        </small>
                      </h4>
                      <p>{val.description}</p>
                    </a>
                  </li>
                );
              })}

              {/* end message */}
            </ul>
          </li>
          <li className="footer">
            <a href="#">See All Messages</a>
          </li>
        </ul>
      </li>
    );
  }
}

export default MessageIcon;
