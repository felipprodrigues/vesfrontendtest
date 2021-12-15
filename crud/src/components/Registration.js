import React, { useState, useRef } from 'react';
import { AddUser } from './AddUser';
import { ManageUser } from './ManageUser';
import { MainContainer, MainContainerHome } from '../styles/Main.style';
import { Button }from '../styles/Buttons.style';
import { Form, FormFieldset, FormInput } from '../styles/Forms.style';
import { ModalOutter, ModalInner } from '../styles/ModalRegister.style';


export const Registration = (props) => {

  const inputElement = useRef("");
  const [ addClass, setAddClass ] = useState(false);

  const handleClick = () => {
    addClass ? setAddClass(false) : setAddClass(true) ;
    console.log(addClass)
  }



  return (
    <>
      <MainContainer className="has-full-height has-background-color">
        <MainContainerHome>
          <h1>Lista de Contatos</h1>
        </MainContainerHome>
        <Button background="#F7841E" href="#" id="modalTrigger" onClick={handleClick}><strong className="is-evident">+</strong> Adicionar Contato </Button>

        <div id="container__table" className="has-fixed-height is-centered has-scroll">
          <ManageUser />
        </div>

        <ModalOutter id="modalShell" className={addClass ? "is-open" : ""}>
          <ModalInner id="innerShell">
            <AddUser />
          </ModalInner>
        </ModalOutter>

      </MainContainer>
    </>
  )
}
