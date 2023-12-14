import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 500px;
    gap: 10px;
`;

export const FormInput = styled.input`
    border-radius: 10px;
    border: 1px solid #8E2690;
`;

export const FormButton = styled.button`
    border-radius: 10px;
    border: none;
`;

export const formTextArea = styled.textarea`
    border-radius: 10px;
    border: 1px solid #8E2690;
    min-width: 160px;
    max-width: 180px;
    min-height: 100px;
    max-height: 150px;
`

export const FormTitle = styled.h1`
    font-size: 32px;
    color: white;
    font-family: 'Roboto'; 
`
export const FormSelect = styled.select`
    border-radius: 10px;
    border: 1px solid #8E2690;
    
`