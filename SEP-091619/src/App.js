import React, { Component } from "react";
import Topnav from "./common/topnav";
import "./App.css";
import Sidenav from "./common/sidenav";
import Wrapper from "./common/wrapper";
import Footer from "./common/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Topnav
          userDetails={{
            fullName: "Santosh Jala",
            designation: "Fullstack Developer",
            since: "June. 2019",
            image:
              "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
          }}
        />

        <Sidenav
          userDetails={{
            name: "Santosh jala",
            status: "Online",
            image:
              "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
          }}
        />
        <Wrapper />
        <Footer />
        {/* <Topnav/>
        <div>
          <Switch>
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/' component={Home} />
          </Switch>
        </div> */}
      </div>
    );
  }
}

export default App;
