import updateConfig from '../../../scripts/updateConfig';
import toPaint from './toPaint';

function createPixels (w: number, h: number): Array<HTMLSpanElement> {
  const pixels: Array<HTMLSpanElement> = [];
  
  for (let yPos = 0; yPos < w; ++yPos) {
    for (let xPos = 0; xPos < h; ++xPos) {
      const pixel = document.createElement('span');
      pixel.className ='pixel';
      pixel.setAttribute('data-x', `${xPos}`);
      pixel.setAttribute('data-y', `${yPos}`);
      pixel.setAttribute('data-color', 'null');

      pixel.onmousedown = () => updateConfig('mouseDown', true);
      pixel.onmouseup = () => updateConfig('mouseDown', false);
      pixel.onmousemove = () => toPaint(pixel);

      pixels.push(pixel);
    }
  }
  return pixels;
}
export default createPixels;