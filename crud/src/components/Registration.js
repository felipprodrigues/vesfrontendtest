import React, { useState } from 'react';
import { AddUser } from './AddUser';
import { MainContainer, MainContainerHome, MainFieldset } from '../styles/Main.style';
import { Button, ButtonModal }from '../styles/Buttons.style';
import { Form, FormFieldset, FormLabel, FormInput } from '../styles/Forms.style';
import { ModalOutter, ModalInner } from '../styles/ModalRegister.style';

export const Registration = () => {

  const openModal = document.getElementById('modalShell');
  let buttonClass = [ 'is-open' ];

  const [ addClass, setAddClass ] = useState(false);

  const handleClick = () => {
    // Change the state whenever this function is called

    addClass ? setAddClass(false) : setAddClass(true) ;
    console.log(addClass)
  }

  // const handleModal = () => {
  //   const addUserButton = document.getElementById('modalTrigger');

  //   addUserButton.addEventListener('click', (e) => {
  //     if(e === false) {
  //       openModal.push(buttonClass)
  //     } else {
  //       return
  //     }

  //     console.log('it works')

  //   });
  // };




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
        <Button background="#F7841E" href="#" id="modalTrigger" onClick={handleClick}><strong className="is-evident">+</strong> Adicionar Contato </Button>

        <ModalOutter id="modalShell" className={addClass ? "is-open" : ""}>
          <ModalInner>
            <AddUser />
            <ButtonModal>Fechar</ButtonModal>
          </ModalInner>
          {/* <div class="modal--inner">
            <img class="modal__img" src="https://picsum.photos/200?random" alt="Cool image">
              <p class="modal__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.</p>
              <button class="modal__button">Close</button>
          </div> */}
        </ModalOutter>

      </MainContainer>
    </>
  )
}
