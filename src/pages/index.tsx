import * as React from "react"
import { graphql } from "gatsby"

import { learnHow, signUp, goDown, selectSmallOffice, selectGrowingOffice, selectBigOffice} from '../helpers/navigate'
import { isOdd } from '../helpers/numbers'

import IntroductionImage from "../images/introduction.svg"
import DownImage from "../images/down.svg"
import CheckImage from "../images/check.svg"
import CheckHighlightImage from "../images/check-highlight.svg"

import TheAdvancedjectImage from "../images/the-project.svg"
import TheCompanyImage from "../images/the-company.svg"
import AccessibilityImage from "../images/accessibility.svg"
import ScalabilityImage from "../images/scalability.svg"
import AnalyticsImage from "../images/analytics.svg"

import Layout from "../components/layout"

const allFeatures = [
  {
    title: 'Accessibility',
    description: "Nothing to install, fast sign-up and super simple interface. We have a coders first approach. You can access our APIs in a few clicks and start scheduling. We've also developped several libraries to make it even easier for you to integrate.",
    image: {
      url: AccessibilityImage
    }
  },
  {
    title: 'Scalability',
    description: "Our infrastructure is virtually unbreakable. You can scale up however you want, use the scheduler as intensively as you need to and we guarantee it won't break. We're very serious about SLOs.",
    image: {
      url: ScalabilityImage
    }
  },
  {
    title: 'Analytics',
    description: "We digest data for you so you don't have to worry about this part. You'll understand the event flow straight away just by reading our analysis.",
    image: {
      url: AnalyticsImage
    }
  },
]

const allAbouts = [
  {
    title: 'The project',
    description: "The world is changing and people relation with offices as well. Working partially from home, or going to the office once in a while. Softwares should evolve and be able to manage this advancedperly. Our goal is to be your office space management solution through our simplicity and flexibility.",
    image: {
      url: TheAdvancedjectImage
    }
  },
  {
    title: 'The company',
    description: "Born in January 2021, it was founded by Laurent Schaffner and Jérémie Ges which are both engineers. It's still in closed beta and waiting for your feedbacks.",
    image: {
      url: TheCompanyImage
    }
  }
]

const allSubscriptions = [
  {
    slug: 'discovery',
    title: 'Discovery',
    price: 'Free',
    cents: null,
    frequency: 'forever',
    description: 'This is our most basic plan. It advancedvides unlimited spaces, analytics and integrations and a few available seats for small structures.',
    callToAction: 'Sign up for free now'
  },
  {
    slug: 'advanced',
    title: 'Advanced',
    price: '$19',
    cents: '.90',
    frequency: 'per month',
    description: 'If you’re a growing company and have too many employees for our free version, this one will fit you perfectly. You can try it out before taking a decision.',
    callToAction: 'Try for free'
  },
  {
    slug: 'enterprise',
    title: 'Enterprise',
    price: '$49',
    cents: '.90',
    frequency: 'per month',
    description: 'You’re a bigger, more established company which needs an unlimited amount of seats? No worry, here’s the perfect fit for you.',
    callToAction: 'Try for free'
  },
]

const allSubscriptionAdvantages = [
  { text: 'Unlimited spaces', slug: 'discovery'},
  { text: 'Unlimited analytics', slug: 'discovery' },
  { text: 'Unlimited integrations', slug: 'discovery' },
  { text: 'Up to 10 seats available', slug: 'discovery' },
  //
  { text: 'Unlimited spaces', slug: 'advanced'},
  { text: 'Unlimited analytics', slug: 'advanced' },
  { text: 'Unlimited integrations', slug: 'advanced' },
  { text: 'Up to 50 seats available', slug: 'advanced', highlight: true },
  //
  { text: 'Unlimited spaces', slug: 'enterprise'},
  { text: 'Unlimited analytics', slug: 'enterprise' },
  { text: 'Unlimited integrations', slug: 'enterprise' },
  { text: 'Unlimited seats', slug: 'enterprise', highlight: true }
]

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
      <Layout language={pageContext.language}>
        <div className="container-fluid">
          <div className="row introduction">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="introduction__punchline">
                  Agnostic payload dispatch.
                  </h2>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-xs-10 col-md-6">
                  <div className="introduction__underline">
                  Schedule events, optimize your architecture and integrate easily with your codebase stack.
                  </div>
                </div>
              </div>
              <div className="row center-xs">
                <div className="introduction__buttons">
                  <button className="button" onClick={signUp}>
                    Sign up free now
                  </button>
                  <button className="button button--white-alt" onClick={learnHow}>
                    Learn how we do it
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
                    Made by developers, for developers
                  </h2>
                </div>
              </div>

              {/* Features list */}
              {allFeatures.map((node, index) => (
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
                  A plan for each size
                  </h2>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-xs-12">
                  <div className="row center-xs">

                    {/* Subscriptions */}
                    {allSubscriptions.map((node, index) => (
                      subscriptionBlock(node, allSubscriptionAdvantages, index)
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
                    About
                  </h2>
                </div>
              </div>

              {/* Advancedject list */}
              {allAbouts.map((node, index) => (
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
