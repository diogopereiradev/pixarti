import { ConfigProps } from '../types/Config';

function loadConfig (): void {
  const config: ConfigProps = {
    color: '#fff',
    eraser: false,
    mouseDown: false
  };  
  window.localStorage.setItem('config', JSON.stringify(config));
}
export default loadConfig;