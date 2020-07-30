import styled from 'styled-components'

const RegStyles = styled.div`
    display:flex;
    flex-flow: column;
    background-color: mistyrose;
    margin-right: 30%;
    margin-left: 30%;
    background-color: mistyrose;
    margin-top: 15%;

    label {
        margin: 2% 0%;
    }

    button {
        border:0.5px solid black;
        background-color: wheat;
        width: 50%;
        margin-top: 1%;
        margin-left:  25%;
        margin-right:  25%;
    }

    p {
        font-size: 0.8rem;
    }

`

const ErrStyles = styled.div`
    font-size: 0.8rem;
    color: red;
    font-style: italic;
`

export { RegStyles }
export { ErrStyles }