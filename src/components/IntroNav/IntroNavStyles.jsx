import styled from "styled-components";
import { Link } from 'react-router-dom'
export const IntroWrapper = styled.div`
/* position: fixed; */
/* margin-top: 100px; */
height: 100vh;  
padding: 100px 20px;
overflow-y: hidden;
/* border-right:5px solid #4F4557; */
& h1{
  margin-bottom: 50px;
}
& p{
  font-size: 2rem;
  margin-bottom: 30px;
}
& .icon{
  width: 50px;
  height: 50px;
  margin: 50px 20px;
}
& .my-link{
  color: inherit;
}
`
export const AviWrap = styled.img`
  width:20%;
  border: 5px solid #6D5D6E;
  border-radius: 50%;
`