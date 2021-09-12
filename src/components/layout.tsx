import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Loader from "react-loader-spinner"

import { Link } from "gatsby"
import { goHome, signIn, bottomSignUp } from '../helpers/navigate'


export default function Layout({ children, language, menu, home, banner }) {
  const [isClickedSignIn, setClickedSignIn] = useState(false)
  const [isClickedSignUp, setClickedSignUp] = useState(false)

  const clickOnSignIn = () => {
    setClickedSignIn(true)
    signIn()
    setTimeout(() => { setClickedSignIn(false) }, 3000)
  }

  const clickOnSignUp = (e) => {
    setClickedSignUp(true)
    bottomSignUp()
    setTimeout(() => { setClickedSignUp(false) }, 3000)
  }

  return (<main>
    <Helmet>
      <html lang={language} />
      <title>Bloodbath - Agnostic job scheduler.</title>
      <description>Dispatch events on time, reduce infrastructure stress and integrate easily with your technical stack.</description>
    </Helmet>
    <div className="wrapper">
      {/* Header */}
      <div className="header">
        <div className="container-fluid">
          <div className="row middle-xs">
            <div className="col-lg col-md-4 col-xs-2">
              <h1 className="header__logo" onClick={goHome}>
                Bloodbath.
              </h1>
            </div>
            <div className="col-lg col-md-8 col-xs-10">
              <div className="header__items">
                <div className="header__item">
                  <Link className="header__link" to="#features">
                    Features
                  </Link>
                </div>
                {/* <div className="header__item">
                  <Link className="header__link" to="#use-cases">
                    Use cases
                  </Link>
                </div> */}
                <div className="header__item">
                  <Link className="header__link" to="#pricing">
                    Pricing
                  </Link>
                </div>
                <div className="header__item">
                  <Link className="header__link" to="#about">
                    About
                  </Link>
                </div>
                <div className="header__item">
                  <Link className="header__link" target="_blank" to="https://bloodbath.notion.site/Guide-00a3edc8f43b4528b2e34bf5eac5b0df">
                    Docs
                  </Link>
                </div>
                <div className="header__item header__item--sign-in">
                  <button className="button button--white-alt" onClick={clickOnSignIn}>
                    {isClickedSignIn ? <Loader
                      type="TailSpin"
                      color="#ea5758"
                      height={17}
                      width={75}
                      timeout={0}
                    /> :
                    "Sign in ->"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page content */}
      {children}
      {/* Banner */}
      <div className="banner">
        <div className="container-fluid">
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-8">
              <div className="row">
                <div className="col-xs-12">
                  <div className="banner__punchline">
                    Get started now
                  </div>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-xs-12 col-sm-6">
                  <div className="banner__underline">
                    It takes less than 5 minutes to sign-up and start using our product.
                  </div>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-lg-4 col-md-6">
                  <div className="button button--white" onClick={clickOnSignUp}>
                  {isClickedSignUp ? <Loader
                      type="TailSpin"
                      color="#ea5758"
                      height={17}
                      width={75}
                      timeout={0}
                    /> :
                    "Sign up for free now"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container-fluid">
          <div className="row middle-xs start-xs">
            <div className="col-xs-1">
              {/*Placeholder*/}
            </div>
            <div className="col-xs-3">
              <h1 className="footer__logo">
                Bloodbath.
              </h1>
            </div>
            <div className="col-xs-4">
              {/*We can add more things here*/}
            </div>
            <div className="col-xs-4 col-md-3">
              <div className="row middle-xs end-xs">
                <div className="col-xs-12">
                  <div>
                    <a href="https://bloodbath.notion.site/Terms-of-use-9d841843e365498cbc48c546d94a2516" target="_blank">
                      Term of use
                    </a>
                  </div>
                  <div>
                    <a href="https://bloodbath.notion.site/Privacy-policy-34446706209e46ee8e5a80aa209c6eb5" target="_blank">
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a href="https://bloodbath.notion.site/Legal-notice-50c9fb50207b4037967b88086c435549" target="_blank">
                      Legal notice
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-1">
              {/*Placeholder*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>)
}
