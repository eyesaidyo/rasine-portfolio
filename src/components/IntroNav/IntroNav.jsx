import { AviWrap, IntroWrapper } from "./IntroNavStyles"
import { Outlet } from 'react-router-dom'
import Avi from '../../assets/rajon.jpg'
import { Link } from 'react-router-dom'
import { ReactComponent as ReactIcon } from '../../assets/github.svg'
import { ReactComponent as VueIcon } from '../../assets/twitterx.svg'
import { ReactComponent as JsIcon } from '../../assets/linkedin.svg'
import { ReactComponent as Ham } from '../../assets/bars-solid.svg'
import { useLocation } from 'react-router-dom'
export const IntroComponent = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return <IntroWrapper isHome={isHome}>
    <div className="ham">
      <Ham className='ham-icon' />
    </div>
    <div>

      <AviWrap src={Avi} />

      <h1>
        Hey, my name is Rasine.
      </h1>

      <p>I'm a front-end developer using web technologies to create accessible, interactive interfaces for the end user. </p>
    </div>
    <div>

      <p><Link className="my-link" to='projects'>Projects</Link></p>
      <p><Link className="my-link" to='/articles'>Articles</Link></p>
      <a href="https://github.com/eyesaidyo"><ReactIcon className='icon' /></a>
      <a href="https://x.com/rasine_era"><VueIcon className='icon' /></a>
      <a href="https://www.linkedin.com/in/johnirem/"><JsIcon className='icon' /></a>
    </div>
  </IntroWrapper>
}
const IntroNav = () => {
  return (
    <>
      <IntroComponent />
      <Outlet className='other' />
    </>

  )
}
export default IntroNav