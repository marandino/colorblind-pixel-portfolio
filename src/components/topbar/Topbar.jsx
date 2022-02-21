import './topbar.scss'
import {Person, Mail} from '@material-ui/icons'
export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
          <div className='left'>
              <a href="#intro" className='logo'>Colorblind Pixel.</a>
              <div className='itemContainer'>
                <Person className='icon'/>
                <span>+506 60712317</span>
              </div>
              <div className='itemContainer'>
              <Mail className='icon'/>
              <span>carloszhou0@gmail.com</span>
            </div>
          </div>
          <div className="right"></div>
      </div>
    </div>
  )
}
