
import styled from 'styled-components'

export const Title = styled.span `
    font-size: 50px;
    font-family: Monaco;

    span{
        font-style:italic;
        font-weight: lighter;
        font-family: Raleway;
        
    }
`;

export const Page1 = styled.div `
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items: center;
    height: 100vh;
    `;

export const Search = styled.form `
    input{
        width: 40vw;
        height: 40px;
    }
    button{
        width: 60px;
        height: 40px;
        background-color: #007b80;
        border-radius: 5px;
    }

`;