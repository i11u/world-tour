import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function LoginPage(props) {
  return (
    <Container maxwidth="ms">
      <Button variant="contained" onClick={props.login}>
        Login
      </Button>
    </Container>
  );
}

export default LoginPage;
