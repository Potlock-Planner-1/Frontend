import styled from 'styled-components'
const HeaderStyle = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid black;
    margin: 0 0 2% 0;
    nav{
        display:flex;
    }
    button{
        width: 100px;
        margin: 1%;
        padding: 3px;
        background-color: mistyrose;
        border: 1px solid black;
        border-radius: 5px;
        font-size: 1em;
        :hover{
            background-color: lightblue;
        }
    }
    .link{
        width: 100px;
        text-align: center;
        margin: 1%;
        padding: 3px;
        text-decoration: none;
        background-color: mistyrose;
        border: 1px solid black;
        border-radius: 5px;
        color: black;
        font-size: 1em;
        :hover{
            background-color: lightblue;
        }
    }
`
export { HeaderStyle }