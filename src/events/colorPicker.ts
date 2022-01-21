import updateConfig from '../scripts/updateConfig';

function colorPickerHandler (ref: HTMLInputElement): void {
  ref.addEventListener('input', () => {
    const val = ref.value;
    ref.value = val;
    
    updateConfig('color', val);
  });
}
export default colorPickerHandler;