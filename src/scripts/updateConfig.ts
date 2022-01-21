import { ConfigProps } from '../types/Config';

function updateConfig(key: string, value: string | boolean): void {
  const config: ConfigProps = JSON.parse(window.localStorage.getItem('config'));
  config[key] = value;

  window.localStorage.setItem('config', JSON.stringify(config));
}
export default updateConfig;