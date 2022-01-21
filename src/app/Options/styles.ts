import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const OptionsContainer = styled.div`
  width: 70px;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5vh;
  background-color: #30303099;
  padding: 20px 0px;
  border-radius: 0px 0px 20px 0px;
`;

export const ColorPicker = styled.input`
  width: 50px;
  background-color: transparent;
  outline: none;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 1px;
  cursor: pointer;
`;

export const EraserButton = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: transparent;
`;

export const ResetButton = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: transparent;
`;

export const FinishButton = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: transparent;
`;