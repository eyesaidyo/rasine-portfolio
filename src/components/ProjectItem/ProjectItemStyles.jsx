import styled from "styled-components";

export const ProjectItemWrap = styled.div`
  width: 70%;
  background-color: #6D5D6E;
  padding: 30px;
  transition: transform 0.3s ease-in-out;
  border-radius: 3px;
  & h3, p{
    color: #F4EEE0;
    text-align: left;
  }
  & .project-item-links{
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    & a{
      color: #F4EEE0;
    }
  }
  :hover{
    background-color: #4F4557;
    transition: transform 0.3s ease-in-out;
    transform: scale(1.13) ;
    
  }
  
`