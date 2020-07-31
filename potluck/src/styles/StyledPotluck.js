import styled from 'styled-components';

const PotluckListDiv = styled.div`
width: 80%;
margin: auto;
display: flex;
flex-wrap: wrap;
align-items: center;
position: relative;
// background-image: linear-gradient(lightyellow, #faf54e);
background-image: linear-gradient( light green, green);
border-radius: 20px;
padding: 16px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
const PotluckDiv = styled.div`
width: 40%;
margin-left: 5%;
.Btn {
    width: 100%;
    margin: 10px;
}
`
export { PotluckListDiv };
export { PotluckDiv };