import ProjectItem from "../ProjectItem/ProjectItem"
import { ProjectsWrapper } from "../Projects/ProjectsStyles"


const Articles = () => {
  return (
    <ProjectsWrapper>
      <h1>Articles Page</h1>
      <ProjectItem live={'https://dev.to/eyesaidyo/github-profile-finder-project-a-walkthrough-51f4'} title='Github Profile Finder Project: A Walkthrough'
        repo={'https://github.com/eyesaidyo/my-repos-2'}
      />
    </ProjectsWrapper>
  )
}
export default Articles