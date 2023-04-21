import ProjectItem from "../ProjectItem/ProjectItem"
import { ProjectsWrapper } from "./ProjectsStyles"

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h1>Projects Page</h1>
      <ProjectItem title={'github checker'} summary='a project fetching all my github repos and displaying them.' />
    </ProjectsWrapper >
  )
}
export default Projects