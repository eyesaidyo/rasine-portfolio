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
            Hey, my name is John R Irem.
          </h1>

          <p>i use web technologies</p>
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