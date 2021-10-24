import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import StyledLink from "../components/StyledLink";
function TopPage() {
  return (
    <div className = "main">
      <div className = "main-top">
        <div className = "main-AR">
          <StyledLink to="/ar-reader">
            <Button class = "btn-square">
              <div className = "font">
                <p className = "font-size">AR</p>
              </div>
              <i class="fas fa-vr-cardboard"></i></Button>
          </StyledLink>
        </div>
        <div className = "main-point">
          <StyledLink to="/pointlist">
            <Button class = "btn-square">
              <div className = "font">
                <p className = "font-size">ポイント</p>
              </div>
              <i class="fas fa-plus-circle"></i>
            </Button>
          </StyledLink>
        </div>
      </div>
      <div className = "main-down">
          <div className = "main-map">
            <StyledLink to="/map">
              <Button class = "btn-square">
                <div className = "font">
                  <p className = "font-size">マップ</p>
                </div>
                <i class="fas fa-map-marked-alt"></i>
              </Button>
            </StyledLink>
          </div>
          <div className = "main-gallery">
            <StyledLink to="/photolist">
              <Button class = "btn-square">
                <div className = "font">
                  <p className = "font-size">ギャラリー</p>
                </div>
                <i class="fas fa-images"></i>
              </Button>
            </StyledLink>
          </div>
      </div>
    </div>
  );
}
export default TopPage;