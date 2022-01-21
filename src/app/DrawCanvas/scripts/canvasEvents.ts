import updateConfig from '../../../scripts/updateConfig';

function canvasEventsHandler (ref: HTMLDivElement): void {
  ref.onmouseleave = () => updateConfig('mouseDown', false);
}
export default canvasEventsHandler;