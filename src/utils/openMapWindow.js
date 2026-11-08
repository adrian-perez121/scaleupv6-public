import mapTemplate from '../templates/map.html?raw';
import mapCss from '../templates/map.css?raw';
import { EVENT_TITLE } from '../config';
import elcoMapImage from '../../assets/images/other/elco_map.jpg';

// Opens the campus map in a new tab, filling in the page template.
const openMapWindow = (theme) => {
  const newWindow = window.open('', '_blank');
  if (!newWindow) return;

  const html = mapTemplate
    .replace('{{MAP_CSS}}', () => mapCss)
    .replace('{{EVENT_TITLE}}', () => EVENT_TITLE)
    .replace('{{THEME}}', () => theme)
    .replace('{{MAP_IMAGE}}', () => new URL(elcoMapImage, window.location.href).href);

  newWindow.document.write(html);
  newWindow.document.close();
};

export default openMapWindow;
