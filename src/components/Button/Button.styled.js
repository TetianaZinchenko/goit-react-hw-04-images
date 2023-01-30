import styled from '@emotion/styled';

/*
 * Стили компонента Buton (Load more)
 */

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  /* box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); */
  box-shadow: inset 0 0 3px 1px #303f9f, inset #3f51b5 -5px -5px 8px 5px,
    inset rgba(255, 255, 255, 0.5) 5px 5px 8px 5px, 1px 1px 1px #303f9f,
    -2px -2px 5px #3f51b5;

  :hover,
  :focus {
    /* background-color: #303f9f; */
    /* background-color: #29368b; */
    background-color: #1d2561;
  }
`;
