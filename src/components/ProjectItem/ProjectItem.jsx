import { ProjectItemWrap } from "./ProjectItemStyles"

const ProjectItem = ({ title, summary }) => {
  return (
    <ProjectItemWrap>
      <h3>{title}</h3>
      <p>{summary}</p>
    </ProjectItemWrap>
  )
}
export default ProjectItem