import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

export const Canvas = styled.div<{ w: number, h: number }>`
  width: calc(${props => (0.825 * props.w + 1)}rem + ${(props => props.h * 2)}px);
  height: calc(${props => (0.825 * props.h + 2)}rem + ${props => (props.w + 1 * 2)}px);
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  padding: 2px 0 2px 2px;
  z-index: 999;
`;