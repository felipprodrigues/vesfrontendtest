import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 100%;
  width: 100%;
`

export const MainContainerHome = styled(MainContainer)`
  min-width: unset;
  width: unset;
`

export const MainWrapper = styled.div`
  display: flex;
  max-width: 85%;
  width: 100%;
  margin: 2em 0;
`

export const MainFieldset = styled.div`
  max-width: 100%;
  width: ${props => props.width};
  background: #2B2B2B;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
