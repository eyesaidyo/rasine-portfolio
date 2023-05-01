import ProjectItem from "../ProjectItem/ProjectItem"
import { ProjectsWrapper } from "../Projects/ProjectsStyles"
import { ProjectsPageIntroWrap } from "../../routes/ProjectsRoute/ProjectsPageStyles"
import { Link } from 'react-router-dom'
import { ArticlesWrap } from "./ArticlesStyles"
const Articles = () => {
  return (
    <ArticlesWrap id="articles-page">
      <h1>Articles Page</h1>
      <ProjectsWrapper id="my-articles">

        <ProjectItem live={'https://dev.to/eyesaidyo/github-profile-finder-project-a-walkthrough-51f4'} title='Github Profile Finder Project: A Walkthrough'
          repo={'https://github.com/eyesaidyo/my-repos-2'}
        />
        <ProjectsPageIntroWrap>
          <Link to='/'><button>Home</button></Link>
          <Link to='/projects'><button>Projects</button></Link>
        </ProjectsPageIntroWrap>
      </ProjectsWrapper>

    </ArticlesWrap>
  )
}
export default Articles