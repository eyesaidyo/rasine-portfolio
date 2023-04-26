import { AviWrap, IntroWrapper } from "./IntroNavStyles"
import { Outlet } from 'react-router-dom'
import Avi from '../../assets/rajon.jpg'
import { Link } from 'react-router-dom'
import { ReactComponent as ReactIcon } from '../../assets/react.svg'
import { ReactComponent as VueIcon } from '../../assets/vuejs.svg'
import { ReactComponent as JsIcon } from '../../assets/js.svg'
const IntroNav = () => {
  return (
    <>
      <IntroWrapper>
        <div>

          <AviWrap src={Avi} />

          <h1>
            Hey, my name is Rasine.
          </h1>

          <p>I'm a front-end developer using web technologies to create accessible, interactive interfaces for the end user. </p>
        </div>
        <div>

          <p><Link className="my-link" to='/'>Projects</Link></p>
          <p><Link className="my-link" to='/articles'>Articles</Link></p>
          <ReactIcon className='icon' />
          <VueIcon className='icon' />
          <JsIcon className='icon' />
        </div>
      </IntroWrapper>
      <Outlet />
    </>

  )
}
export default IntroNav