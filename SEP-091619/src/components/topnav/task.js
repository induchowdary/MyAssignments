import React, { Component } from "react";

class TaskIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.tasks = this.props.taskList;
    console.log(this.tasks);
  }
  render() {
    return (
      <li className="dropdown tasks-menu">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <i className="fa fa-flag-o" />
          <span className="label label-danger">9</span>
        </a>
        <ul className="dropdown-menu">
          <li className="header">You have {this.tasks.length} tasks</li>
          <li>
            {/* inner menu: contains the actual data */}
            <ul className="menu">
              {this.tasks.map(function(val, i) {
                return (
                  <li>
                    {/* Task item */}
                    <a href="#">
                      <h3>
                        Design some buttons
                        <small className="pull-right">{val.percentage}%</small>
                      </h3>
                      <div className="progress xs">
                        <div
                          className="progress-bar progress-bar-aqua"
                          style={{ width: val.percentage + "%" }}
                          role="progressbar"
                          aria-valuenow={val.percentage}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="sr-only">
                            {val.percentage}% Complete
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
              {/* end task item */}
            </ul>
          </li>
          <li className="footer">
            <a href="#">View all tasks</a>
          </li>
        </ul>
      </li>
    );
  }
}

export default TaskIcon;
