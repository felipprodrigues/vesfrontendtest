import React, { useState, useEffect } from 'react';
import { editUser, getUsers } from '../service/api';
import { useParams, Link } from 'react-router-dom';
import { Form, FormFieldset, FormLabel, FormInput } from '../styles/Forms.style'
// import { ButtonCancel, ButtonReturn } from '../styles/Buttons.style'
import { MainContainer, MainWrapper, MainFieldset } from '../styles/Main.style'


export const EditUser = () => {
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

  const [user, setUser] = useState(initialValues);
  const { nome, email, phoneOne, phoneTwo, phoneThree, addressOne, addressTwo, addressThree } = user;
  const { id } = useParams();
  // const history = useNavigate

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })

  }

  const editUserDetails = async () => {
    await editUser(id, user);
  }

  return (
    <MainContainer id="editUserContainer">
      <h1 id="editTitle">Edite os dados cadastrais</h1>
      <MainWrapper id="editUserWrapper">
        <MainFieldset width="100%" className="has-full-width is-centered">
          <Form id="editForm" width="50%" onSubmit={(e) => this.editUserDetails(e)}>
            <FormFieldset>
              <FormLabel for="nome">Nome</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='nome' value={nome} type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="email">Email</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='email' value={email} type="text" placeholder="Insira email" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="phoneOne">Contato Primário *</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='phoneOne' value={phoneOne} type="text" placeholder="Telefone para Contato" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="phoneTwo">Contato Secundário (Opcional)</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='phoneTwo' value={phoneTwo} type="text" placeholder="Telefone para Contato" autoFocus="autofocus" required></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="phoneThree">Contato Terciário (Opcional)</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='phoneThree' value={phoneThree} type="text" placeholder="Telefone para Contato" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="addressOne">Endereço Primário *</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='addressOne' value={addressOne} type="text" placeholder="Informar Endereço" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="addressTwo">Endereço Secundário (Opcional)</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='addressTwo' value={addressTwo} type="text" placeholder="Informar Endereço" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <FormFieldset>
              <FormLabel for="addressThree">Endereço Terciário (Opcional)</FormLabel>
              <FormInput onChange={(e) => onValueChange(e)} name='addressThree' value={addressThree} type="text" placeholder="Informar Endereço" autoFocus="autofocus"></FormInput>
            </FormFieldset>
            <div className="is-flex has-margin-bottom button__edit">
              <Link className="button__edit" to={'/'} onClick={() => editUserDetails()} background="#2E7FED" >Salvar</Link>

            </div>

          </Form>
        </MainFieldset>

      </MainWrapper>
    </MainContainer>
  )
}

export default EditUser
