import styled from 'styled-components'
const HeaderStyle = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 0 2% 0;
    background-image: linear-gradient(90deg,floralwhite, cornsilk);
    nav{
        display:flex;
    }
    button{
        width: 1% 5%;
        margin: 1%;
        padding: 3px;
        background-color: mistyrose;
        border:none;
        border-radius: 5px;
        font-size: 1em;
        :hover{
            background-color: lightblue;
        }
    }
    .link{
        width: 1% 5%;
        margin: 1%;
        padding: 3px;
        text-decoration: none;
        border-radius: 5px;
        color: black;
        font-size: 1em;
        background-color: mistyrose;
        :hover{
            background-color: lightblue;
        }
    }
`
export { HeaderStyle }