import './index.css'
import {useHistory} from 'react-router-dom'
import NotFoundImg from '../../images/not-found.png'

const NotFound = () => {
  const r = useHistory()
  const OnclickHome = () => {
    r.replace('/home')
  }
  return (
    <div className="not__cont">
      <img src={NotFoundImg} alt="not found" />
      <h3>404</h3>
      <p>Oh! Page not found</p>
      <button type="button" onClick={OnclickHome}>
        Disney+ Hotstar HOME
      </button>
    </div>
  )
}

export default NotFound
