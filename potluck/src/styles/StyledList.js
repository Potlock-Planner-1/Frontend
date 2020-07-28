import styled from 'styled-components'

const ListStyles = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:2% 10%;
    color: antiquewhite;

    h2 {
        text-transform: capitalize;
        background-color: black;
        border-bottom: 2px solid antiquewhite;
        width: 60%;
        margin: 0% 20%;
        padding: 2%;
    }

    ul {
        margin: 0% 20%;
        width: 60%;
        background-color: black;
    }

    li {
        margin: 2% 25%;
        width: 50%;
        text-transform: capitalize;
        font-style: italic;
    }
`

export { ListStyles }