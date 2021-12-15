import React, { useState, useEffect } from 'react';
import { AddUser } from './AddUser';
import { ManageUser } from './ManageUser';
import { MainContainer, MainContainerHome } from '../styles/Main.style';
import { Button }from '../styles/Buttons.style';
import { Form, FormFieldset, FormInput } from '../styles/Forms.style';
import { ModalOutter, ModalInner } from '../styles/ModalRegister.style';

export const Registration = () => {

  const openModal = document.getElementById('modalShell');
  const [ addClass, setAddClass ] = useState(false);

  const handleClick = () => {
    addClass ? setAddClass(false) : setAddClass(true) ;
    console.log(addClass)
  }


  return (
    <>
      <MainContainer className="has-full-height has-background-color">
        <MainContainerHome>
          <h1>Pesquisar Contatos</h1>

          <Form className="has-full-width is-centered">
            <FormFieldset>
              <FormInput type="text" placeholder="Insira nome de usuário" autoFocus="autofocus" >
              </FormInput>
            </FormFieldset>
          </Form>

        </MainContainerHome>
        <Button background="#F7841E" href="#" id="modalTrigger" onClick={handleClick}><strong className="is-evident">+</strong> Adicionar Contato </Button>

        <div id="container__table" className="has-fixed-height is-centered has-scroll">
          <ManageUser />
        </div>

        {/* 4. LÓGICA PARA BUSCAR CONTATO POR NOME */}



        <ModalOutter id="modalShell" className={addClass ? "is-open" : ""}>
          <ModalInner id="innerShell">
            <AddUser />
          </ModalInner>
        </ModalOutter>

      </MainContainer>
    </>
  )
}
