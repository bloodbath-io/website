import * as React from "react"
import { graphql } from "gatsby"

import { learnHow, signUp, goDown, selectSmallOffice, selectGrowingOffice, selectBigOffice} from '../helpers/navigate'
import { isOdd } from '../helpers/numbers'

import IntroductionImage from "../images/introduction.svg"
import DownImage from "../images/down.svg"
import CheckImage from "../images/check.svg"
import CheckHighlightImage from "../images/check-highlight.svg"

import Layout from "../components/layout"

export const query = graphql`
  query LandingQuery($language: DATOCMS_SiteLocale!) {
    datocms {
      menu(locale: $language) {
        features
        pricing
        about
        signIn
      }

      banner(locale: $language) {
        punchline
        underline
        callToAction
      }

      home(locale: $language) {
        punchline
        underline
        callToAction
        secondaryAction
        pricingPunchline
        featuresPunchline
        aboutPunchline
      }

      allFeatures(locale: $language, orderBy: order_ASC) {
        title
        description
        image {
          url
        }
      }

      allSubscriptions(locale: $language, orderBy: order_ASC) {
        slug
        title
        price
        cents
        frequency
        description
        callToAction
      }

      allSubscriptionAdvantages(locale: $language, orderBy: order_ASC) {
        subscriptionSlug
        text
        highlight
      }

      allAbouts(locale: $language, orderBy: order_ASC) {
        title
        description
        image {
          url
        }
      }
    }
  }
`

const plansAdvantages = {
  smallOffice: [
    { text: 'Unlimited spaces'},
    { text: 'Unlimited analytics' },
    { text: 'Unlimited integrations' },
    { text: 'Up to 10 seats available' }
  ],
  growingOffice: [
    { text: 'Unlimited spaces'},
    { text: 'Unlimited analytics' },
    { text: 'Unlimited integrations' },
    { text: 'Up to 50 seats available', highlight: true }
  ],
  bigOffice: [
    { text: 'Unlimited spaces'},
    { text: 'Unlimited analytics' },
    { text: 'Unlimited integrations' },
    { text: 'Unlimited seats', highlight: true }
  ]
}

const featureBlock = (block, index) => {
  if (isOdd(index)) {
    return (
      <div className="row features-block middle-xs center-xs">
        <div className="col-xs-12 col-sm-5">
          <h3 className="features-block__title">{block.title}</h3>
          <p className="features-block__text">{block.description}</p>
        </div>
        <div className="col-xs-12 first-xs col-sm-5 last-sm col-md-5 col-md-offset-1">
          <div className="features-block__image">
            <img src={block.image.url} />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="row features-block middle-xs center-xs">
      <div className="col-xs-12 col-sm-5 col-sm-offset-1">
          <div className="features-block__image">
            <img src={block.image.url} />
          </div>
        </div>
        <div className="col-xs-12 col-sm-5 col-md-offset-1">
          <h3 className="features-block__title">{block.title}</h3>
          <p className="features-block__text">{block.description}</p>
        </div>
      </div>
    )
  }
}

const subscriptionBlock = (block, advantages, index) => {

  const filteredAdvantages = advantages.filter((advantage) => (advantage.subscriptionSlug === block.slug) || (advantage.subscriptionSlug === ''))

  return (<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div className="pricing-block">
      <div className="pricing-block__title">{block.title}</div>
      <div className="pricing-block__price">{block.price}<span className="pricing-block__price--cents">{block.cents}</span></div>
      <div className="pricing-block__price-frequency">{block.frequency}</div>
      <div className="pricing-block__description">
        {block.description}
      </div>
      <div className="pricing-block__checklist">
        {newAdvantagesList(filteredAdvantages)}
      </div>
      <div className="pricing-block__button">
        <div className="button button--white" onClick={selectSmallOffice}>
          {block.callToAction}
        </div>
      </div>
    </div>
  </div>)
}

const newAdvantagesList = (advantages: Array<{ highlight?: boolean, text: string}>) => {
  return advantages.map((advantage, index) => (
    <div className="row start-xs" key={index}>
      <div className="col-md-12">
        <div className={(advantage.highlight ? 'pricing-block__check pricing-block__check--highlight' : 'pricing-block__check')}>
          <span className="pricing-block__check-icon">
            <img src={(advantage.highlight ? CheckHighlightImage : CheckImage)} />
          </span>
          <span className="pricing-block__check-label">{advantage.text}</span>
        </div>
      </div>
    </div>
  ))
}

const advantagesList = (plan: Array<{ highlight?: boolean, text: string}>) => {
  return plan.map((advantage, index) => (
    <div className="row start-xs" key={index}>
      <div className="col-md-12">
        <div className={(advantage.highlight ? 'pricing-block__check pricing-block__check--highlight' : 'pricing-block__check')}>
          <span className="pricing-block__check-icon">
            <img src={(advantage.highlight ? CheckHighlightImage : CheckImage)} />
          </span>
          <span className="pricing-block__check-label">{advantage.text}</span>
        </div>
      </div>
    </div>
  ))
}

const IndexPage = ({ data, pageContext }) => {
  return (
    <main>
      <Layout language={pageContext.language} menu={data.datocms.menu} home={data.datocms.home} banner={data.datocms.banner}>
        <div className="container-fluid">
          <div className="row introduction">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="introduction__punchline">
                    {data.datocms.home.punchline}
                  </h2>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-xs-10 col-md-6">
                  <div className="introduction__underline">
                    {data.datocms.home.underline}
                  </div>
                </div>
              </div>
              <div className="row center-xs">
                <div className="introduction__buttons">
                  <button className="button" onClick={signUp}>
                    {data.datocms.home.callToAction}
                  </button>
                  <button className="button button--white-alt" onClick={learnHow}>
                    {data.datocms.home.secondaryAction}
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div className="introduction__image">
                    <img src={IntroductionImage} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div className="introduction__down">
                    <img src={DownImage} onClick={goDown} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* Features */}
        <div className="container-fluid">
          <div className="row center-xs features" id="features">
            <div className="col-lg-8 col-md-10 col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="features__punchline">
                    {data.datocms.home.featuresPunchline}
                  </h2>
                </div>
              </div>

              {/* Features list */}
              {data.datocms.allFeatures.map((node, index) => (
                featureBlock(node, index)
              ))}

            </div>
          </div>
        </div>
        {/* Pricing */}
        <div className="container-fluid">
          <div className="row center-xs pricing" id="pricing">
            <div className="col-xs-12 col-md-10 col-lg-10">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="pricing__punchline">
                    {data.datocms.home.pricingPunchline}
                  </h2>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-xs-12">
                  <div className="row center-xs">

                    {/* Subscriptions */}
                    {data.datocms.allSubscriptions.map((node, index) => (
                      subscriptionBlock(node, data.datocms.allSubscriptionAdvantages, index)
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About us */}
        <div className="container-fluid">
          <div className="row center-xs features" id="about">
            <div className="col-lg-8 col-md-10 col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="features__punchline">
                    {data.datocms.home.aboutPunchline}
                  </h2>
                </div>
              </div>

              {/* Project list */}
              {data.datocms.allAbouts.map((node, index) => (
                featureBlock(node, index)
              ))}

            </div>
          </div>
        </div>
      </div>
    </Layout>
  </main>
  )
}

export default IndexPage
