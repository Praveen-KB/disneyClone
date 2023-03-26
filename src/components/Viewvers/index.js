/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/media-has-caption */
import './index.css'
import Disney from '../../images/viewers-disney.png'
import Marvel from '../../images/viewers-marvel.png'
import National from '../../images/viewers-national.png'
import Pixar from '../../images/viewers-pixar.png'
import Starwars from '../../images/viewers-starwars.png'
import DisneyV from '../../videos/1564674844-disney.mp4'
import MarvelV from '../../videos/1564676115-marvel.mp4'
import NationalV from '../../videos/1564676296-national-geographic.mp4'
import PixarV from '../../videos/1564676714-pixar.mp4'
import StarWarsV from '../../videos/1608229455-star-wars.mp4'

const Viewvers = () => (
  <div className="viewers__container">
    <div className="viewers__wrap">
      <img src={Disney} alt="" />
      <video autoPlay={true} muted loop={true} playsInline={true}>
        <source src={DisneyV} type="video/mp4" />
      </video>
    </div>
    <div className="viewers__wrap">
      <img src={Pixar} alt="" />
      <video autoPlay={true} muted loop={true} playsInline={true}>
        <source src={PixarV} type="video/mp4" />
      </video>
    </div>
    <div className="viewers__wrap">
      <img src={National} alt="" />
      <video autoPlay={true} muted loop={true} playsInline={true}>
        <source src={NationalV} type="video/mp4" />
      </video>
    </div>
    <div className="viewers__wrap">
      <img src={Starwars} alt="" />
      <video autoPlay={true} muted loop={true} playsInline={true}>
        <source src={StarWarsV} type="video/mp4" />
      </video>
    </div>
    <div className="viewers__wrap">
      <img src={Marvel} alt="" />
      <video autoPlay={true} muted loop={true} playsInline={true}>
        <source src={MarvelV} type="video/mp4" />
      </video>
    </div>
  </div>
)

export default Viewvers
