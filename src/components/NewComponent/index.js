/* eslint-disable react/destructuring-assignment */
import {Link} from 'react-router-dom'
import './index.css'

const NewComponent = props => (
  <div className="rec__container">
    <h4>{props.text}</h4>
    <div className="rec__content">
      {props.list &&
        props.list.map(each => (
          <div key={each.id} className="rec__wrap">
            <Link to={`/details/${each.id}`}>
              <img src={each.cardImg} alt={each.title} />
            </Link>
          </div>
        ))}
    </div>
  </div>
)

export default NewComponent
