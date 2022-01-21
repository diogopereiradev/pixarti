import React, { useRef, useEffect } from 'react';
import {
  CloseButton,
  Container, 
  Popup,
  PopupContent,
  PopupTitle
} from './styles';

import closeIcon from '../../assets/images/close.svg';
import closeButtonHandler from './scripts/closeButton';

function FinishPopup (): JSX.Element {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const closeButtonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  useEffect(() => {
    const ref: HTMLDivElement = containerRef.current;
    const closeRef: HTMLButtonElement = closeButtonRef.current;
    closeButtonHandler(closeRef, ref);
  }, []);

  return (
    <Container ref={containerRef} className="finish-popup"> 
      <Popup>
        <CloseButton ref={closeButtonRef}><img width="40" src={closeIcon}/></CloseButton>
        <PopupTitle>Copy the code and paste to use pixelart.</PopupTitle>
        <PopupContent className="finish-popup-content" />
      </Popup>
    </Container>
  );
}
export default FinishPopup;