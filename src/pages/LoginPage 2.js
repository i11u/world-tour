import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import liff from "@line/liff";

function LoginPage(props) {
  const history = useHistory();

  async function login() {
    // LIFFの初期化;
    const liffId = "1656562501-GwVbApqE";
    await liff.init({ liffId }).catch((err) => {
      window.alert("LIFFの初期化失敗\n" + err);
    });

    // LINEに未認証の場合、ログイン画面にリダイレクト
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  }
  return (
    <Container maxwidth="ms">
      <Button
        variant="contained"
        onClick={() => {
          login();
          props.setLoggedIn(true);
          history.push("/");
        }}
      >
        Login
      </Button>
    </Container>
  );
}

export default LoginPage;
