/* eslint-disable arrow-body-style */

import {useParams, Redirect} from 'react-router-dom'

import PlayWhite from '../../images/play-icon-white.png'
import PlayBlack from '../../images/play-icon-black.png'
import GroupIcon from '../../images/group-icon.png'
import l from '../../moviesData'
import './index.css'

const MovieDetailsComponent = () => {
  const {id} = useParams()
  const r = l.filter(e => e.id === id)[0]

  if (!r) {
    return <Redirect to="/not-found" />
  }

  return (
    <div className="detail__container">
      <div className="detail__background">
        <img src={r.backgroundImg} alt="" />
      </div>
      <div className="detail__imgtitle">
        <img alt="" src={r.titleImg} />
      </div>
      <div className="details__content">
        <div className="details__controls">
          <button type="button" className="detail__player">
            <img src={PlayBlack} alt="" />
            <span>Play</span>
          </button>
          <button type="button" className="detail__player detail__trailer">
            <img src={PlayWhite} alt="" />
            <span>Trailer</span>
          </button>
          <div className="details__addlist">
            <span />
            <span />
          </div>
          <div className="details__addlist">
            <img src={GroupIcon} alt="" />
          </div>
        </div>
        <p className="details__subtitle">{r.subTitle}</p>
        <p className="details__description">{r.description}</p>
      </div>
    </div>
  )
}

export default MovieDetailsComponent
