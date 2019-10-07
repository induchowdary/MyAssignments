import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import About from "../screens/about";
import Contact from "../screens/contact";
import Home from "../screens/home";
import File from "../screens/file";

class Wrapper extends Component {
  render() {
    return (
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content">
          {/* Todo : add switch statement here */}
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/file" component={File} />
            <Route path="/" component={Home} />
          </Switch>
        </section>
        {/* /.content */}
      </div>
    );
  }
}

export default Wrapper;
