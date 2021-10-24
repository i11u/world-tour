import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import styled from "styled-components";

import BackButton from "./BackButton";
function PageWithBackButton() {
  return (
    <Box bgcolor="primary.main">
      <BackButton />
    </Box>
  );
}

export default PageWithBackButton;
