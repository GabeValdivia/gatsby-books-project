import styled from 'styled-components';

export const Button = styled.button `
    font-family: arial, sans-serif;
    font-weight: bolder;
    letter-spacing: 1.1px;
    text-transform: uppercase;
    padding: 12px 20px;
    background: rebeccapurple;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
    ${props => props.block ? 'display: block; width: 100%;': ''}

    &:hover{
        background: indigo;
    }
`;