import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #00000099;
  z-index: 999;
`;

export const Popup = styled.div`
  position: relative;
  width: 40vw;
  height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #e3e3e3;
  border-radius: 8px;
  padding: 20px;
`;

export const PopupTitle = styled.h1`
  font-family: monospace, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 900;
  font-size: 23px;
  max-width: 510px;
  min-width: 200px;
  color: #222222;
  position: absolute;
  left: 30px;
  top: 30px;
  z-index: -1;
  padding-right: 50px;
`;

export const PopupContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: pre;
  color: #222222;
  font-family: monospace, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const CloseButton = styled.button`
  width: 55px;
  height: 55px;
  background-color: transparent;
  position: absolute;
  right: 10px;
  top: 30px;
  cursor: pointer;
`;