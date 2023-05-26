import Styled from 'styled-components'

export const GradientContainer = Styled.div`
  background-image: linear-gradient(
    to ${props => props.applyDirection},
    ${props => props.applyColor1},
    ${props => props.applyColor2}
  );
min-height:100vh;
background-size:cover;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const GenerateHeading = Styled.h1`
font-family:"Roboto";
color:#ededed;
font-weight:700;
font-size:30px;`

export const ParaGraph = Styled.p`
font-family:"Roboto";
color:#ededed;
font-weight:500;
font-size:20px;`

export const UnOrderedDirectionsList = Styled.ul`
width:50%;
list-style-type:none;
margin:0px;
padding:0px;
display:flex;
justify-content:space-around;
align-items:flex-start;
flex-wrap:wrap;
@media (max-width:767px){
    width:60%;
}`

export const ColorContainer = Styled.div`
display:flex;
align-items:flex-start;`

export const InputContainer = Styled.div`
display:flex;
flex-direction:column;`

export const ColorParagraph = Styled.p`
font-family:"Roboto";
color:#ededed;
font-weight:500;
font-size:15px;
margin:20px;`

export const ColorInput = Styled.input`
width:60px;
height:35px;
padding:0px;
border:none;
background-color:transparent;
margin:20px;
outline:none;
cursor:pointer;`

export const GenerateButton = Styled.button`
width:100px;
height:30px;
background-color:#00c9b7;
border:none;
border-radius:5px;
font-family:"Roboto";
color: #1e293b;
font-weight:600;
font-size:14px;
outline:none;
cursor:pointer;`
