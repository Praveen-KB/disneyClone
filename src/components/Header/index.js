/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import './index.css'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {auth, provider} from '../../firebase'
import {signInWithPopup} from 'firebase/auth'
import {
  selectUserName,
  //   selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from '../../app/features/user/userSlice'

import DisneyLogo from '../../images/logo.svg'
import HomeIcon from '../../images/home-icon.svg'
import WatchedIcon from '../../images/watchlist-icon.svg'
import SeriesIcon from '../../images/series-icon.svg'
import OriginalIcon from '../../images/original-icon.svg'
import SearchIcon from '../../images/search-icon.svg'
import MovieIcon from '../../images/movie-icon.svg'

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const username = useSelector(selectUserName)
  //   const useremail = useSelector(selectUserEmail)
  const userphoto = useSelector(selectUserPhoto)

  const setUser = user => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }),
    )
  }

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        setUser(user)
        history.push('/home')
      }
    })
  }, [username])

  const handelAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider)
        .then(result => {
          setUser(result.user)
        })
        .catch(error => {
          alert(error.message)
        })
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState())
          history.push('/')
        })
        .catch(e => alert(e.message))
    }
  }

  return (
    <nav className="header__nav">
      <a className="header__logo" href="/">
        <img src={DisneyLogo} alt="website logo" />
      </a>

      {!username ? (
        <a onClick={handelAuth} className="header__login">
          Login
        </a>
      ) : (
        <>
          <div className="login__nav-menu">
            <a href="/home">
              <img src={HomeIcon} alt="home" />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img src={SearchIcon} alt="home" />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <img src={WatchedIcon} alt="home" />
              <span>WATCHELIST</span>
            </a>
            <a href="/home">
              <img src={OriginalIcon} alt="home" />
              <span>ORIGINALS</span>
            </a>
            <a href="/home">
              <img src={MovieIcon} alt="home" />
              <span>MOVIES</span>
            </a>
            <a href="/home">
              <img src={SeriesIcon} alt="home" />
              <span>SERIES</span>
            </a>
          </div>
          <div className="header__signout">
            <img className="header__userimg" src={userphoto} alt="" />
            <div className="header__dropdown">
              <span onClick={handelAuth}>Sign Out</span>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Header
