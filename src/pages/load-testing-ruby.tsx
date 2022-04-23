import React, { useState } from "react"
import { graphql } from "gatsby"

import { seeGithubRuby, learnHow, signUp, goDown, selectDiscovery, selectAdvanced, selectEnterprise} from '../helpers/navigate'
import { isOdd } from '../helpers/numbers'
import { navigate } from "gatsby"
import Loader from "react-loader-spinner"

import RubyImage from "../images/ruby.png"

import Layout from "../components/layout"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css' // TODO: replace that by my own css


const IndexPage = ({ data, pageContext }) => {
  const [isClickedSignUp, setClickedSignUp] = useState(false)

  const clickOnSignUp = (e) => {
    setClickedSignUp(true)
    signUp()
    setTimeout(() => { setClickedSignUp(false) }, 3000)
  }

  return (
    <main>
      <Layout language={pageContext.language}>
        <div className="container-fluid">
          <div className="row introduction">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="introduction__punchline">
                  Load testing in Ruby
                  </h2>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-xs-10 col-md-6">
                  <div className="introduction__underline">
                  Start accessing our APIs in a few clicks and schedule your hits.
                  </div>
                </div>
              </div>
              <div className="row center-xs">
                <div className="introduction__buttons">
                  <button className="button" onClick={clickOnSignUp}>
                    {isClickedSignUp ? <Loader
                      type="TailSpin"
                      color="#FFF"
                      height={17}
                      width={155}
                      timeout={0}
                    /> :
                    "Try it now for free"}
                  </button>
                  <button className="button button--white-alt" onClick={seeGithubRuby}>
                    See it on Github
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div className="introduction__code_image introduction__code" onClick={seeGithubRuby}>
                    <img src={RubyImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Layout>
  </main>
  )
}

export default IndexPage
