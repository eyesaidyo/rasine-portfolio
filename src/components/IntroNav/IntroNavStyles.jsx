import styled from "styled-components";
export const IntroWrapper = styled.div`
/* position: fixed; */
/* margin-top: 100px; */
height: 100vh;  
padding: 100px 20px;
overflow-y: hidden;
overflow-x: hidden;
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
& .ham{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  display: none;
  
  
  & .ham-icon{
    width: 50px;
    align-self: flex-end;
    & :hover{
      cursor: pointer;
    }
    & :active{
      background-color: red;
    }
  }
}
 @media (max-width:1200px) {
  // position: fixed;
  display: ${props => props.isHome ? 'block' : 'none'};
 
 }
`
export const AviWrap = styled.img`
  width:20%;
  border: 5px solid #6D5D6E;
  border-radius: 50%;
`