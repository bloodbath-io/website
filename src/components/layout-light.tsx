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
      <title>Load testing in Ruby</title>
      <description>Start accessing our APIs in a few clicks and schedule your hits.</description>
    </Helmet>
    <div className="wrapper">
      {/* Header */}
      <div className="header">
        <div className="container-fluid">
          <div className="row middle-xs">
            <div className="col-lg col-md-4 col-xs-2">
              <h1 className="header__logo-no-click">
                Bloodbath.
              </h1>
            </div>
            <div className="col-lg col-md-8 col-xs-10">
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
