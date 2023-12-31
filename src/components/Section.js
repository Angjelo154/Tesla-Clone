import React from 'react'
import { styled } from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title,description,leftBtnText,rightBtnText,backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemsText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemsText>
      </Fade>
      <Fade bottom>
      <Buttons>
          <ButtonGroup>
            <LeftButton>
              {leftBtnText}
            </LeftButton>
            {rightBtnText &&
              <RightButton>
                {rightBtnText}
              </RightButton>
            }
          </ButtonGroup> 
          <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>

      </Fade>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    background-image: url('/images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
    `

const ItemsText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const ButtonGroup =styled.div`
display:flex;
margin-top:16px;
margin-bottom:30px;
@media (max-width:768px){
  flex-direction:column;
}
`

const LeftButton =styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform: uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`

const RightButton=styled(LeftButton)`
color:black;
background:white;
opacity:0.65;
`
const DownArrow= styled.img`
margin-top:10px;
height:40px;
overflow-x:hidden;
animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
`