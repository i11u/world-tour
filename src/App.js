import React, { useState } from "react";
import liff from "@line/liff";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TopPage from "./pages/TopPage";
import CameraPage from "./pages/CameraPage";
import PhotoListPage from "./pages/PhotoListPage";
import PointListPage from "./pages/PointListPage";
import ARReaderPage from "./pages/ARReaderPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  async function login() {
    // LIFFの初期化
    const liffId = "1656562501-GwVbApqE";
    await liff.init({ liffId }).catch((err) => {
      window.alert("LIFFの初期化失敗\n" + err);
    });

    // LINEに未認証の場合、ログイン画面にリダイレクト
    if (!liff.isLoggedIn()) {
      await liff.login();
      return;
    }

    setLoggedIn(true);

    auth().onAuthStateChanged(async user => {
      if (user) {
        // 3.1 firebaseにログイン済みの場合、ユーザー情報を取得し、終了
        this.user = user
      } else {
        // 3.2 firebaseにログインしていない場合
        // 3.2.1 LIFF APIを利用して、LINEのアクセストークンを取得
        const accessToken = liff.getAccessToken()
        // 3.2.3 LINEのIDトークンをfirebase functionsに投げて、firebaseのカスタム認証用トークンを取得
        const login = functions.httpsCallable('login')
        const result = await login({accessToken})
        if (result.data.error) {
          console.error(result.data.error)
        } else {
          // 3.2.4 firebaseの認証用トークンを利用してカスタム認証
          const res = await auth().signInWithCustomToken(result.data.token)
          this.user = res.user
        }
      }
    })
    // return <Redirect />;
  }

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            {loggedIn ? <TopPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            <LoginPage login={login} />
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
