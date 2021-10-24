import React, { Component, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TopPage from "./pages/TopPage";
import MapPage from "./pages/MapPage";
import PhotoListPage from "./pages/PhotoListPage";
import PointListPage from "./pages/PointListPage";
import ARReaderPage from "./pages/ARReaderPage";
import liff from "@line/liff";
import LoginPage from "./pages/LoginPage";

class App extends Component {
  // const [loggedIn, setLoggedIn] = useState(true);
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userLineID: "",
      pictureUrl: "",
    };
  }

  componentDidMount = async () => {
    await liff.init({ liffId: "1656562501-GwVbApqE" }).catch((err) => {
      throw err;
    });
    if (liff.isLoggedIn()) {
      let getProfile = await liff.getProfile();
      this.setState({
        name: getProfile.displayName,
        userLineID: getProfile.userId,
        pictureUrl: getProfile.pictureUrl,
      });
    } else {
      liff.login();
      console.log(liff.isLoggedIn.toString());
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/">
              <TopPage userLineID={this.userLineID} />
            </Route>
            <Route path="/ar-reader">
              <ARReaderPage userLineID={this.userLineID} />
            </Route>
            <Route path="/map">
              <MapPage userLineID={this.userLineID} />
            </Route>
            <Route path="/pointlist">
              <PointListPage userLineID={this.userLineID} />
            </Route>
            <Route path="/photolist">
              <PhotoListPage userLineID={this.userLineID} />
            </Route>{" "}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
