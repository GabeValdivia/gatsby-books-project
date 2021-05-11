import styled from 'styled-components';

export const Input = styled.input `
    display: block;
    width: 100%;
    padding: 12px 18px;
    font-size: 18px;
    text-transform: capitalize;
    margin-bottom: 8px;
    border-radius: 4px;
    border: 1px solid #ddd;
    box-shadow: none;
    
    &:focus{
        border: 3px solid rebeccapurple;
    }
    &:active{
        border: 3px solid goldenrod;
    }
`;