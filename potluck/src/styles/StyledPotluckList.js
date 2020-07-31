import styled from 'styled-components'

const PotlucklistStyled = styled.div`
background-color: cornsilk;
display:flex;
flex-direction: column;
    .potluck-card{
        background-color:mistyrose;
    }
`
const PotluckCardStyled = styled.div`
    button{
        background-color:mistyrose;
        width: 80%;
        border: none;
        border-radius: 20px;
        margin-bottom: 3%;
    }
`
const PotluckDetailsStyled = styled.div`
    .potluck-header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        width: 30%;
        margin: 0 35%;
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
    .detailsContainer{
        display:flex;
        width: 80%;
        margin: 0 10% 10% 10%;
        justify-content: space-evenly;
    }
    .foodContainer{
        text-align:left;
    }
    .guestContainer{
        text-align: right;
    }

    
`
export { PotlucklistStyled }
export { PotluckCardStyled }
export { PotluckDetailsStyled }