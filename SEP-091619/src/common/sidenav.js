import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidenav extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img
                src={this.props.userDetails.image}
                className="img-circle"
                alt="User Image"
              />
            </div>
            <div className="pull-left info">
              <p>{this.props.userDetails.name}</p>
              <a href="#">
                <i className="fa fa-circle text-success" />{" "}
                {this.props.userDetails.status}
              </a>
            </div>
          </div>

          {/* search form */}
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input
                type="text"
                name="q"
                className="form-control"
                placeholder="Search..."
              />
              <span className="input-group-btn">
                <button
                  type="submit"
                  name="search"
                  id="search-btn"
                  className="btn btn-flat"
                >
                  <i className="fa fa-search" />
                </button>
              </span>
            </div>
          </form>
          {/* /.search form */}
          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li>
              <Link to="/">
                <i className="fa fa-circle-o text-red" /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/About">
                <i className="fa fa-circle-o text-red" /> <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <i className="fa fa-circle-o text-red" /> <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link to="/file">
                <i className="fa fa-circle-o text-red" /> <span>File</span>
              </Link>
            </li>

            <li className="header">LABELS</li>
            <li>
              <a href="#">
                <i className="fa fa-circle-o text-red" /> <span>Important</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-circle-o text-yellow" />{" "}
                <span>Warning</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-circle-o text-aqua" />{" "}
                <span>Information</span>
              </a>
            </li>
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default Sidenav;
