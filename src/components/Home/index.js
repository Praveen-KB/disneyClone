/* eslint-disable prettier/prettier */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */

import './index.css'
import ImageSlider from '../ImageSlider'
import Viewvers from '../Viewvers'
import NewComponent from '../NewComponent'

import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
  setMovies,
  selectRecommend,
  selectNewDisney,
  selectTrending,
  selectOriginals,
} from '../../app/features/movie/movieSlice'
import {selectUserName} from '../../app/features/user/userSlice'

import l from '../../moviesData'

const Home = () => {
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  let rec = []
  let newDisney = []
  let original = []
  let trending = []

  useEffect(() => {
    l.map(doc => {
      switch (doc.type) {
        case 'recommend':
          rec.push({...doc})
          break
        case 'new':
          newDisney.push({...doc})
          break
        case 'original':
          original.push({...doc})
          break
        case 'trending':
          trending.push({...doc})
          break
      }
    })

    dispatch(
      setMovies({
        recommended: rec,
        newDisney,
        trending,
        original,
        all: l,
      }),
    )
  }, [userName])

  const r = useSelector(selectRecommend)
  const n = useSelector(selectNewDisney)
  const t = useSelector(selectTrending)
  const o = useSelector(selectOriginals)

  return (
    <main className="home__container">
      <ImageSlider />
      <Viewvers />
      <NewComponent text="Recommended" list={r} />
      <NewComponent text="New To Disney +" list={n} />
      <NewComponent text="Originals" list={t} />
      <NewComponent text="Trending" list={o} />
    </main>
  )
}

export default Home
