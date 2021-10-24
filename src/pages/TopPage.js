import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";

import StyledLink from "../components/StyledLink";

function TopPage() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <ListItem>
          <StyledLink to="/ar-reader">
            <Button variant="contained">AR</Button>
          </StyledLink>
        </ListItem>
      </Grid>
      <Grid item xs={6}>
        <ListItem>
          {" "}
          <StyledLink to="/map">
            <Button variant="contained">マップ</Button>
          </StyledLink>
        </ListItem>
      </Grid>
      <Grid item xs={6}>
        <ListItem>
          <StyledLink to="/pointlist">
            <Button variant="contained">ぽいんと</Button>
          </StyledLink>
        </ListItem>
      </Grid>
      <Grid item xs={6}>
        <ListItem>
          <StyledLink to="/photolist">
            <Button variant="contained">写真</Button>
          </StyledLink>
        </ListItem>
      </Grid>
    </Grid>
  );
}

export default TopPage;
