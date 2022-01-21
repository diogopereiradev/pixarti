import React, { Fragment } from 'react';
import { render } from 'react-dom';

import loadConfig from './scripts/loadConfig';
import GlobalStyles from './assets/GlobalStyles';
import FinishPopup from './app/FinishPopup';
import Options from './app/Options';
import DrawCanvas from './app/DrawCanvas';

function App (): JSX.Element {
  return (
    <Fragment>
      <GlobalStyles />
      <FinishPopup />
      <Options />
      <DrawCanvas w={40} h={40}/>
    </Fragment>
  );
}

window.addEventListener('DOMContentLoaded', () => {
  loadConfig();
  render(<App />, document.querySelector('.pixarti-root'));
});