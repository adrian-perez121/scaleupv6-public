import mapImage from "../../assets/images/other/ScaleUPv6_Map_.svg";

// Opens the campus map image in a new tab (the browser's image viewer handles pinch-to-zoom).
const openMapWindow = () => {
  window.open(mapImage, "_blank", "noopener");
};

export default openMapWindow;
