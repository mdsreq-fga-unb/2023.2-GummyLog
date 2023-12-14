import React from 'react';
import * as Form from "../components/FormComponents/FormComponens"
import MarcasModal from '../components/Modal';
import { ChakraProvider, Box,theme, extendTheme } from "@chakra-ui/react";

const NovoSKU = () => {
  return (
    <Form.FormContainer>
      <Form.FormTitle>Adicionar SKU</Form.FormTitle>
      <Form.FormInput placeholder='producto' />
      <Form.FormSelect placeholder='marca'>
        <option>marca1</option>
        <option>marca2</option>
      </Form.FormSelect>

        <MarcasModal />

      <Form.FormInput placeholder='cantidad' />
      <Form.FormInput placeholder='dirección' />
      <Form.formTextArea placeholder='descripción' />
      <Form.FormButton>Registrar Produto</Form.FormButton>
      <Form.FormButton>Cancelar</Form.FormButton>
    </Form.FormContainer>
  )
}

export default NovoSKU;