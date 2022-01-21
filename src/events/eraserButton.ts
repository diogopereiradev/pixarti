import { ConfigProps } from '../types/Config';
import updateConfig from '../scripts/updateConfig';

function eraserButtonHandler (ref: HTMLButtonElement): void {
  ref.addEventListener('click', () => {
    const config: ConfigProps = JSON.parse(window.localStorage.getItem('config') || '{}');

    if (config.eraser) {
      ref.style.border = '0px';
      updateConfig('eraser', false);
    } else {
      ref.style.border = '2px solid #fff';
      updateConfig('eraser', true);
    }
  });
}
export default eraserButtonHandler;