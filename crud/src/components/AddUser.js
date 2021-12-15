import React, { useState } from 'react';
import { addUser } from '../service/api';
import { Form, FormFieldset, FormLabel, FormInput } from '../styles/Forms.style'
import { ButtonAddSubmit } from '../styles/Buttons.style'
import { MainContainer, MainWrapper, MainFieldset } from '../styles/Main.style'

const initialValues = {
  nome: '',
  email: '',
  phoneOne: '',
  phoneTwo: '',
  phoneThree: '',
  addressOne: '',
  addressTwo: '',
  addressThree: ''
}

export const AddUser = () => {

  const [openPanel, setOpenPanel] = useState(false);

  const [user, setUser] = useState(initialValues);
  const { nome, email, phoneOne, phoneTwo, phoneThree, addressOne, addressTwo, addressThree } = user;

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  const addUserDetails = async () => {
    await addUser(user);
    await alert('Seu cadastro foi enviado com sucesso');
  }

  return (
    <MainContainer>
      <MainWrapper>
        <MainFieldset width="100%" height="85vh">
          <h1 id="modalTitle">Cadastrar Novo Usuário</h1>
          <Form width="75%" onSubmit={() => this.onValueChange()}>
            <FormFieldset>
              <FormLabel for="nome">Nome</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='nome' value={nome} type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="email">Email</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='email' value={email} type="text" placeholder="Insira email" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="phoneOne">Contato Primário</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='phoneOne' value={phoneOne} type="text" placeholder="Telefone para Contato" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="phoneTwo">Contato Secundário (Opcional)</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='phoneTwo' value={phoneTwo} type="text" placeholder="Telefone para Contato" autoFocus="autofocus" ></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="phoneThree">Contato Terciário (Opcional)</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='phoneThree' value={phoneThree} type="text" placeholder="Telefone para Contato" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="addressOne">Endereço Primário</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='addressOne' value={addressOne} type="text" placeholder="Informar Endereço" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="addressTwo">Endereço Secundário (Opcional)</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='addressTwo' value={addressTwo} type="text" placeholder="Informar Endereço" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="addressThree">Endereço Terciário (Opcional)</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='addressThree' value={addressThree} type="text" placeholder="Informar Endereço" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <ButtonAddSubmit onClick={(e) => addUserDetails(e)} background="#FE761C" >Confirmar</ButtonAddSubmit>

          </Form>
        </MainFieldset>
      </MainWrapper>
    </MainContainer>
  )
}
