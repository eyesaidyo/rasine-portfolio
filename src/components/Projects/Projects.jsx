import ProjectItem from "../ProjectItem/ProjectItem"
import { MainProjectsWrapper } from "./ProjectsStyles"
import { ProjectsPageIntroWrap } from "../../routes/ProjectsRoute/ProjectsPageStyles"
import { Link } from 'react-router-dom'
const Projects = () => {
  return (
    <MainProjectsWrapper>
      <h1>Projects</h1>
      <ProjectItem title={'Chatter'} summary='a social media site for text-based content (...in progress)' repo='https://github.com/eyesaidyo/rasine-portfolio' live='https://rasine-chatter.netlify.app/' />
      <ProjectItem title={'to-do vue'}
        summary='basic to-do list app in vue'
        repo='https://github.com/eyesaidyo/todo-vue'
        live='https://rasine-todo-vue.netlify.app/'

      />
      <ProjectItem title={'github checker react'} summary='a project fetching all my github repos and displaying them.' repo={'https://github.com/eyesaidyo/my-repos-2'} live='https://eyesaidyo.netlify.app/' />
      <ProjectItem title={'meta-bnb'} summary='landing page for a metaverse real-estate directory'
        repo='https://github.com/eyesaidyo/metabnb' live='https://rajon-stage3.netlify.app/'
      />

      <ProjectItem title={'github checker vue'} summary='a project fetching all my github repos done in vue js' repo='https://github.com/eyesaidyo/alt-school-exam-vue' live='https://rasine-vue.netlify.app/' />
      <ProjectItem title={'to-do vue'}
        summary='basic to-do list app in vue'
        repo='https://github.com/eyesaidyo/todo-vue'
        live='https://rasine-todo-vue.netlify.app/'

      />
      <ProjectsPageIntroWrap>
        <Link to='/'><button>Home</button></Link>
        <Link to='/articles'><button>Articles</button></Link>
      </ProjectsPageIntroWrap>
    </MainProjectsWrapper >
  )
}
export default Projects