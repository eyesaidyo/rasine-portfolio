import { IntroWrapper } from "./IntroNavStyles"
import { Outlet } from 'react-router-dom'
const IntroNav = () => {
  return (
    <IntroWrapper>
      <h1>
        Hey, my name is John R Irem.
      </h1>

      <p>i use web technologies</p>
      <Outlet />
    </IntroWrapper>
  )
}
export default IntroNav