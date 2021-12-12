import styled from "styled-components";

export const ModalOutter = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsla(50, 100%, 50%, 0.7);
  opacity: 0;
  pointer-events: none;
  transition: all .2s;
  `

export const ModalInner = styled.div`
  width: 40%;
  height: auto;
  background-color: white;
  padding: 5px;
  border: 3px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.6em;
  background: transparent;
  padding: 2.5em 0 ;
`;
