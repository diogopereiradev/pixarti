import React, { useEffect, useRef } from 'react';
import {
  Container,
  OptionsContainer,
  ColorPicker,
  EraserButton,
  ResetButton,
  FinishButton
} from './styles';

import eraserIcon from '../../assets/images/eraser.svg';
import resetIcon from '../../assets/images/reset.svg';
import finishIcon from '../../assets/images/finish.svg';

import eraserButtonHandler from '../../events/eraserButton';
import colorPickerHandler from '../../events/colorPicker';
import resetButtonHandler from '../../events/resetButton';
import finishButtonHandler from '../../events/finishButton';

function Options (): JSX.Element {
  const eraserButtonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const colorPickerRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const resetButtonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const finishButtonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  useEffect(() => {
    const eraserRef: HTMLButtonElement = eraserButtonRef.current;
    const colorRef: HTMLInputElement = colorPickerRef.current;
    const resetRef: HTMLButtonElement = resetButtonRef.current;
    const finishRef: HTMLButtonElement = finishButtonRef.current;
    eraserButtonHandler(eraserRef);
    colorPickerHandler(colorRef);
    resetButtonHandler(resetRef);
    finishButtonHandler(finishRef);
  }, []);

  return (
    <Container>
      <OptionsContainer>
        <ColorPicker ref={colorPickerRef} type="color" title="color picker" value="#ffffff" readOnly/>
        <EraserButton ref={eraserButtonRef}><img width="30" src={eraserIcon}/></EraserButton>
        <ResetButton ref={resetButtonRef}><img width="30" src={resetIcon}/></ResetButton>
        <FinishButton ref={finishButtonRef}><img width="30" src={finishIcon}/></FinishButton>
      </OptionsContainer>
    </Container>
  );
}
export default Options;