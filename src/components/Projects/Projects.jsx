import ProjectItem from "../ProjectItem/ProjectItem"
import { ProjectsWrapper } from "./ProjectsStyles"

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h1>Projects</h1>
      <ProjectItem title={'github checker'} summary='a project fetching all my github repos and displaying them.' />
      <ProjectItem title={'meta-bnb'} summary='landing page for a metaverse real-estate directory' />

      <ProjectItem title={'github checker vue'} summary='a project fetching all my github repos done in vue js' />
      <ProjectItem title={'to-do vue'} summary='basic to-do list app in vue' />
      <ProjectItem title={'github checker'} summary='a project fetching all my github repos and displaying them.' />
      <ProjectItem title={'meta-bnb'} summary='landing page for a metaverse real-estate directory' />
    </ProjectsWrapper >
  )
}
export default Projects