import React from "react"
import { Helmet } from "react-helmet"

import { Link } from "gatsby"
import { goHome, signIn, bottomSignUp } from '../helpers/navigate'

export default function Layout({ children, language, menu, home, banner }) {
  debugger
  return (<main>
    <Helmet>
      <html lang={language} />
      <title>BigSeat - {home.punchline}</title>
      <description>{home.underline}</description>
    </Helmet>
    <div className="wrapper">
      {/* Header */}
      <div className="header">
        <div className="container-fluid">
          <div className="row middle-xs">
            <div className="col-lg col-md-4 col-xs-2">
              <h1 className="header__logo" onClick={goHome}>
                BigSeat.
              </h1>
            </div>
            <div className="col-lg col-md-8 col-xs-10">
              <div className="header__items">
                <div className="header__item">
                  <Link className="header__link" to="#features">
                    {menu.features}
                  </Link>
                </div>
                <div className="header__item">
                  <Link className="header__link" to="#pricing">
                    {menu.pricing}
                  </Link>
                </div>
                <div className="header__item">
                  <Link className="header__link" to="#about">
                    {menu.about}
                  </Link>
                </div>
                <div className="header__item header__item--sign-in">
                  <button className="button button--white-alt" onClick={signIn}>
                    {menu.signIn} ->
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
                    {banner.punchline}
                  </div>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-xs-12 col-sm-6">
                  <div className="banner__underline">
                    {banner.underline}
                  </div>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-lg-4 col-md-6">
                  <div className="button button--white" onClick={bottomSignUp}>
                    {banner.callToAction}
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
                BigSeat.
              </h1>
            </div>
            <div className="col-xs-4">
              {/*Legal paper will be there*/}
            </div>
            <div className="col-xs-4">
              <div>
                <a href="/">
                  <span className="footer__acronym">US</span> English
                </a>
              </div>
              <div>
                <a href="/fr">
                  <span className="footer__acronym">FR</span> French
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>)
}
