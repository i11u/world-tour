import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import StyledLink from "../components/StyledLink";
function HomePage() {
  return (
    <div className = "main-home">
        <StyledLink to="/top">
            <Button class = "btn-square">
                <div className = "font">
                    <p className = "font-size">はじめる</p>
                </div>
            </Button>
        </StyledLink>
    </div>
  );
}
export default HomePage;