import styled from "styled-components";
import Button from "@mui/material/Button";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const BackButton = () => {
  return (
    <div>
      <StyledButton variant="container">
        <ArrowBackOutlinedIcon />
        Back
      </StyledButton>
    </div>
  );
};

const StyledButton = styled(Button)``;

export default BackButton;
