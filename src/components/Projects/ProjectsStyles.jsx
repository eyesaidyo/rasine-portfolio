import styled from "styled-components";
export const ProjectsWrapper = styled.div`
display: flex;
flex-direction:column;
align-items: center;
/* justify-content: space-between; */
gap: 20px;
overflow-y:auto;
scrollbar-width: 3000px;
padding: 30px;
height: 100%;
 h1{
  text-align: center;
}
@media (max-width: 1200px) {
  width: 100%;
    /* display: none; */
    justify-content: space-between;
    height: 100vh;
    overflow: hidden;
  
}
`
export const MainProjectsWrapper = styled.div`
display: flex;
flex-direction:column;
align-items: center;
/* justify-content: space-between; */
gap: 10px;
overflow-y:auto;
scrollbar-width: 3000px;
padding: 70px 30px;
height: 100%;
 h1{
  text-align: center;
}
@media (max-width: 1200px) {
  width: 100%;
    /* display: none; */
    justify-content: space-between;
    height: 100%;
    overflow: hidden;
  
}
` 