import mapImage from "../../assets/images/other/ScaleUp_map.jpg";

// Opens the campus map image in a new tab (the browser's image viewer handles pinch-to-zoom).
const openMapWindow = () => {
  window.open(mapImage, "_blank", "noopener");
};

export default openMapWindow;
