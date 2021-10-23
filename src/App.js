import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopPage from "./pages/TopPage";
import CameraPage from "./pages/CameraPage";
import PhotoListPage from "./pages/PhotoListPage";
import PointListPage from "./pages/PointListPage";
import ARReaderPage from "./pages/ARReaderPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={TopPage} />
          <Route path="/ar-reader" component={ARReaderPage} />
          <Route path="/camera" component={CameraPage} />
          <Route path="/pointlist" component={PointListPage} />
          <Route path="/photolist" component={PhotoListPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
