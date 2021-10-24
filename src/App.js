import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TopPage from "./pages/TopPage";
import MapPage from "./pages/MapPage";
import PhotoListPage from "./pages/PhotoListPage";
import PointListPage from "./pages/PointListPage";
import ARReaderPage from "./pages/ARReaderPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

// import {auth} from "./firebase";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route>
            <HomePage />
          </Route>
          <Route path="/top">
            <TopPage />
          </Route>
          {/* <Route path="/login"> */}
          {/* <LoginPage login={login} /> */}
          {/* </Route> */}
          <Route path="/ar-reader">
            <ARReaderPage />
          </Route>
          <Route path="/map">
            <MapPage />
          </Route>
          <Route path="/pointlist">
            <PointListPage />
          </Route>
          <Route path="/photolist">
            <PhotoListPage />
          </Route>{" "}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
