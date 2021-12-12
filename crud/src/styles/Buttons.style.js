import styled from 'styled-components';

export const Button = styled.a`
  padding: .5em 1.2em;
  margin: 15px 0;
  background: ${props => props.background};
  border: none;
  border-radius: 3px;
  display: inline-block;
  text-align: center;
  transition: all .2s linear;
  color: white;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    filter: brightness(0.9);
  }
`

export const ButtonAdd = styled(Button)`
  border-radius: 50%;
  padding: .35em .35em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
`

export const ButtonAddSubmit = styled.button`
  padding: .75em;
  display: inline-block;
  width: 100%;
  background-color: #f7841e;
  color: white
  font-weight: bolder;
  border: none;
  margin-bottom: 1.5em;
`

export const ButtonModal = styled.button`
  border: 3px solid tomato;
  padding: 5px;
  color: tomato;
  background: transparent;
  transition: all .2s linear;

  &:hover {
    color: white;
    background: tomato;
    border-color: white;
    font-weight: bolder;
  }
`


export default Button
