import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Topbar.css'
import ProfileIcon from './ProfileIcon'
import { AuthDataProvider } from '../context/authContext'

const Topbar = ({ toggleSidebar }) => {
  return (
    <>
      <AuthDataProvider>
        <div className='bars-icon' onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className='profile-bar'>
          <ProfileIcon />
        </div>
      </AuthDataProvider>
    </>
  )
}

export default Topbar