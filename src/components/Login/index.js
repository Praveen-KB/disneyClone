/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */

import './index.css'
import Logo1 from '../../images/cta-logo-one.svg'
import Logo2 from '../../images/cta-logo-two.png'

const Login = () => {
  return (
    <>
      <section className="login__cont">
        <div className="login__content">
          <div className="login__CTA">
            <img className="login__ctalogoone" src={Logo1} alt="none" />
            <a href="/" className="login__signup">
              GET ALL THERE
            </a>
            <p className="login__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
              egestas congue quisque egestas. Arcu vitae elementum curabitur
              vitae nunc sed velit.
            </p>
          </div>
          <img className="login__ctalogotwo" src={Logo2} alt="brand logo" />
          <div className="login__background"></div>
        </div>
      </section>
    </>
  )
}

export default Login
