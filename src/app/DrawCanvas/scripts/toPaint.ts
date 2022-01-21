import { ConfigProps } from '../../../types/Config';

function toPaint (pixel: HTMLSpanElement): void {
  const config: ConfigProps = JSON.parse(window.localStorage.getItem('config') || '{}');

  if (!config.mouseDown) return;
  if (config.eraser) {
    pixel.style.backgroundColor = '#30303099';
  } else {
    pixel.style.backgroundColor = config.color;
    pixel.setAttribute('data-color', config.color);
  }
}
export default toPaint;