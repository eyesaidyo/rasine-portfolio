import { AviWrap, IntroWrapper } from "./IntroNavStyles"
import { Outlet } from 'react-router-dom'
import Avi from '../../assets/rajon.jpg'
import { Link } from 'react-router-dom'
const IntroNav = () => {
  return (
    <>
      <IntroWrapper>
        <div>

          <AviWrap src={Avi} />

          <h1>
            Hey, my name is Rasine.
          </h1>

          <p>i am front-end developer using web technologies to create accessible, interactive interfaces for the end user. </p>
        </div>
        <div>

          <p><Link to='/'>Projects</Link></p>
          <p><Link to='/articles'>Articles</Link></p>

        </div>
      </IntroWrapper>
      <Outlet />
    </>

  )
}
export default IntroNav