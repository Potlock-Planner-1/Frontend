import styled from 'styled-components';

const PotluckListDiv = styled.div`
width: 80%;
margin: auto;
display: flex;
flex-wrap: wrap;
align-items: center;
position: relative;
// background-image: linear-gradient(lightyellow, #fff5f4);
// background-image: linear-gradient( #006400, #00FF00);
// border-radius: 20px;
// padding: 16px;
// box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
const PotluckDiv = styled.div`
width: 40%;
margin-left: 5%;
.Btn {
    // background-image: linear-gradient( #ffe4e1, #ffecea);
    // border-radius: 20px;
    // padding: 16px;
    // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    width: 100%;
    margin: 10px;
}
`
const PotluckDetailsDiv = styled.div`
width: 80%;
margin: auto;
padding: 20px 20px;
text-align: center;
border: 3px solid #ffafa8;
border-radius: 6px;

button {
    padding: 5px 5px;
    margin: 10px 10px;
    color: blue;
    background-color: mistyrose;
    border: 1px solid black;
    border-radius: 4px;
    :hover{
        background-color: lightblue;
    }
}
`
const CreatePotluckDiv = styled.div`
width: 80%;
margin: auto;
padding: 20px 20px;
text-align: center;
border: 3px solid #ffafa8;
border-radius: 6px;

button {
    padding: 5px 5px;
    margin: 10px 10px;
    color: blue;
    font-weight: bold;
    background-color: mistyrose;
    border: 1px solid black;
    border-radius: 4px;
    :hover{
        background-color: lightblue;
    }
}
input {
    border: 1px solid black;
    font-weight: bold;
    padding: 5px 5px;
    margin: 10px 10px;
}
`
const UpdatePotluckDiv = styled.div`
button {
    padding: 5px 5px;
    margin: 10px 10px;
    color: blue;
    font-weight: bold;
    background-color: mistyrose;
    border: 1px solid black;
    border-radius: 4px;
    :hover{
        background-color: lightblue;
    }
}
input {
    border: 1px solid black;
    font-weight: bold;
    padding: 5px 5px;
    margin: 10px 10px;
}
`

export { PotluckListDiv };
export { PotluckDiv };
export { PotluckDetailsDiv };
export { CreatePotluckDiv };
export { UpdatePotluckDiv };