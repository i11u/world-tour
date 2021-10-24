import PageWithBackButton from "../components/BackButton";
import Container from "@mui/material/Container";

function ARReaderPage() {
  return (
    <Container maxwidth="sm">
      <PageWithBackButton></PageWithBackButton>
      <a-scene embedded arjs="debugUIEnabled:false;trackingMethod:best;" vr-mode-ui="enabled: false">
    <a-assets>
        <a-asset-item id="santa-obj" src="../model_obj/santa/santa.obj"></a-asset-item>
        <a-asset-item id="santa-mtl" src="../model_obj/santa/santa.mtl"></a-asset-item>
    </a-assets>
    <a-marker preset="hiro">
        <a-obj-model id="santa" src="#santa-obj" mtl="#santa-mtl" position="0 0 0" scale="0.5 0.5 0.5" rotation="0 0 0"></a-obj-model>
        <a-text value="Merry Christmas!!!" position="0 1.3 0" align="center"></a-text>
    </a-marker>
    <a-entity camera></a-entity>
    </a-scene>
    <div class="ui">
        <img id="snap"/>
        <a href="#" id="delete-photo" title="Delete Photo" class="disabled"><i class="material-icons">delete</i></a>
        <a href="" id="take-photo" title="Take Photo"><i class="material-icons">photo_camera</i></a>
        <a href="#" id="download-photo" download="selfie.png" title="Save Photo" class="disabled" target="_blank"><i class="material-icons">file_download</i></a>
    </div>
    </Container>
  );
}

export default ARReaderPage;
