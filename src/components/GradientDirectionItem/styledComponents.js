import Styled from 'styled-components'

export const ListItem = Styled.li``

export const DirectionButton = Styled.button`
width:120px;
height:35px;
background-color:#ededed;
opacity:${props => (props.isActive ? 1 : 0.5)};
border:none;
border-radius:5px;
outline:none;
cursor:pointer;
font-family:"Roboto";
color:#334155;
font-weight:500;
font-size:16px;
margin-bottom:15px;
`
