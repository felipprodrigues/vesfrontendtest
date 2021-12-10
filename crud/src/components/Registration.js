import React from 'react'
import { MainContainer, MainContainerHome, MainFieldset } from '../styles/Main.style';
import {  Button }from '../styles/Buttons.style';
import { Form, FormFieldset, FormLabel, FormInput } from '../styles/Forms.style';

export const Registration = () => {



  return (
    <>
      <MainContainer className="has-full-height has-background-color">
        <MainContainerHome>
          <h1>Pesquisar Contatos</h1>

          <Form className="has-full-width is-centered">
            <FormFieldset>
              <FormInput type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" ></FormInput>
            </FormFieldset>
          </Form>

        </MainContainerHome>
        <Button background="#F7841E" href="/add"><strong className="is-evident">+</strong> Adicionar Contato </Button>
      </MainContainer>
    </>
  )
}
