import { ProjectItemWrap } from "./ProjectItemStyles"

const ProjectItem = ({ title, summary, repo, live }) => {
  return (
    <ProjectItemWrap>
      <h3>{title}</h3>
      <p>{summary}</p>
      <div className="project-item-links">
        <span className="link1"><a href={live}>view live page</a></span>
        <span className="link2"><a href={repo}>view repository</a></span>
      </div>
    </ProjectItemWrap>
  )
}
export default ProjectItem