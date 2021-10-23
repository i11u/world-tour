import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TopPage from "./pages/TopPage";
import CameraPage from "./pages/CameraPage";
import PhotoListPage from "./pages/PhotoListPage";
import PointListPage from "./pages/PointListPage";
import ARReaderPage from "./pages/ARReaderPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            {loggedIn ? <TopPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            <LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/ar-reader">
            <ARReaderPage />
          </Route>
          <Route path="/camera">
            <CameraPage />
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
