import React from "react"
import { Helmet } from "react-helmet"

import { Link } from "gatsby"
import { goHome, signIn, bottomSignUp } from '../helpers/navigate'

export default function Layout({ children, language, menu, home, banner }) {
  return (<main>
    <Helmet>
      <html lang={language} />
      <title>Bloodbath - Agnostic payload dispatch.</title>
      <description>Schedule events, optimize your architecture and integrate easily with your codebase stack.</description>
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
                  <Link className="header__link" target="_blank" to="https://docs.bloodbath.io">
                    Docs
                  </Link>
                </div>
                <div className="header__item header__item--sign-in">
                  <button className="button button--white-alt" onClick={signIn}>
                    Sign in ->
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
                  <div className="button button--white" onClick={bottomSignUp}>
                    Sign up for free now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container-fluid">
          <div className="row middle-xs center-xs">
            <div className="col-xs-4">
              <h1 className="footer__logo">
                Bloodbath.
              </h1>
            </div>
            <div className="col-xs-4">
              {/*Legal paper will be there*/}
            </div>
            <div className="col-xs-4">
              <div>
                <a href="/term-of-use">
                  Term of use
                </a>
              </div>
              <div>
                <a href="/privacy-policy">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>)
}
