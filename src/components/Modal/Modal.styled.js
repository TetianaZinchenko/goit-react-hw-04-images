import styled from '@emotion/styled';

/*
 * Стили компонента Modal
 */

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.8); */
  /* background-color: #5218fa; */
  background-color: rgba(82, 24, 250, 0.7);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
