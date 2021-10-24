import Container from "@mui/material/Container";
// import Webcam from "react-webcam"
import BackButton from "../components/BackButton";
import styled from "styled-components";

function ARReaderPage() {
  return (
    <Container maxwidth="sm">
      <BackButton />
      {/* <StyledWebcam /> */}
    </Container>
  );
}

// const StyledWebcam = styled(Webcam)`
//   width: 100%;
//   height: 100%;
// `;

export default ARReaderPage;
