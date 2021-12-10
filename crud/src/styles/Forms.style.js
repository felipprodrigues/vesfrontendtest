import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid black;
  border-radius: 7px;
  width: ${props => props.width};
  padding: 0 5em;
  background: white;
  margin: 1.2em 0 2.5em;
`

export const FormEdit = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const FormFieldset = styled.fieldset`
  border: 0;
  margin: 1.2em 0;
  min-width: 0;
  padding: 0;
  position: relative;

  & * {
    transition: all .3s linear;
  }
`

export const FormFieldsetEdit = styled(FormFieldset)`
  width: 50%;
  margin: 0;
  margin-top: 2em;
`

export const FormLabel = styled.label`
  color: #6B7C93;
  display: block;
  font-weight: bold;
  margin: 0 0 8px;
  min-height: 20px;
`

export const FormInput = styled.input`
  width: 100%;
  height: 40px;

  &::placeholder {
    color: #959CA6;
    padding-left: 2em
  }
`
