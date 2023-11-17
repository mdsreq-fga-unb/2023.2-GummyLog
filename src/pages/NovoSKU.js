import React from 'react';
import * as Form from "../components/FormComponents/FormComponens"

const NovoSKU = () => {
  return (
    <Form.FormContainer>
        <Form.FormTitle>Adicionar SKU</Form.FormTitle>
        <Form.FormInput placeholder='nome'/>
        <Form.FormInput placeholder='marca'/>
        <Form.formTextArea placeholder='descrição'/>
        <Form.FormButton>Registrar Produto</Form.FormButton>
        <Form.FormButton>Cancelar</Form.FormButton>
    </Form.FormContainer>
  )
}

export default NovoSKU;