import React, { useState } from "react"
import { graphql } from "gatsby"

import { learnHow, signUp, goDown, selectDiscovery, selectAdvanced, selectEnterprise} from '../helpers/navigate'
import { isOdd } from '../helpers/numbers'
import { navigate } from "gatsby"
import Loader from "react-loader-spinner"

import IntroductionImage from "../images/introduction.svg"
import DownImage from "../images/down.svg"
import CheckImage from "../images/check.svg"
import CheckHighlightImage from "../images/check-highlight.svg"

import TheAdvancedjectImage from "../images/the-project.svg"
import TheCompanyImage from "../images/the-company.svg"
import AccessibilityImage from "../images/accessibility.svg"
import ScalabilityImage from "../images/scalability.svg"
import AnalyticsImage from "../images/analytics.svg"

import RubyImage from "../images/ruby.png"

import Layout from "../components/layout"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css' // TODO: replace that by my own css

const codeSamples = (index) => {
  return (
    <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    // <p className="features-block__buttons">
    // <button className="button button--white-alt" onClick={() => { 'https://github.com/bloodbath-io/bloodbath-ruby' }} key={index}>
    //    Ruby
    // </button>
    // </p>
  )
}

const allFeatures = [
  {
    title: 'Accessibility',
    description: "Nothing to install, fast sign-up and super simple interface. We have a coders first approach. You can access our APIs in a few clicks and start scheduling. We've also developed several libraries to make it even easier for you to integrate.",
    image: {
      url: AccessibilityImage
    },
    extraContent: codeSamples
  },
  {
    title: 'Scalability',
    description: "Our infrastructure is virtually unbreakable. Scale up without worrying by using the scheduler as intensively as you need. We guarantee it'll be on time, every time. We're very serious about SLOs.",
    image: {
      url: ScalabilityImage
    },
    extraContent: () => {}
  },
  {
    title: 'Analytics',
    description: "We digest data for you so you don't have to worry about this part. You'll understand the event flow right away just by reading our analysis.",
    image: {
      url: AnalyticsImage
    },
    extraContent: () => {}
  },
]

const allAbouts = [
  {
    title: 'The project',
    description: "The world is changing and there's an obvious technological need for precision. Our idea is simple, but very effective: removing the pain of scheduling & dispatching payloads in your stack. Our solution is and will always be simple and flexible.",
    image: {
      url: TheAdvancedjectImage
    },
    extraContent: () => {}
  },
  {
    title: 'The company',
    description: "Born in June 2021, it was founded by Laurent Schaffner who's an experienced engineer. It's still in open beta and waiting for your feedback.",
    image: {
      url: TheCompanyImage
    },
    extraContent: () => {}
  }
]

const allSubscriptions = [
  {
    slug: 'discovery',
    title: 'Discovery',
    price: 'Free',
    cents: null,
    frequency: 'to play around',
    description: 'This is our most basic plan. It gives you 5,000 events to schedule and test our system out. All other functionalities are the same from the other plans.',
    callToAction: 'Sign up for free now',
    click: selectDiscovery
  },
  {
    slug: 'advanced',
    title: 'Advanced',
    price: '$1',
    cents: '.25',
    frequency: 'per 1,000 events',
    description: 'If you’re a growing company and have more serious loads to send, this one will fit you perfectly. You can try it out before taking your final decision.',
    callToAction: 'Choose this plan',
    click: selectAdvanced
  },
  {
    slug: 'enterprise',
    title: 'Enterprise',
    price: 'Custom',
    cents: '',
    frequency: 'from 1,000,000 events',
    description: 'You’re a bigger, more established company that needs to schedule a lot more events on a regular basis. No worry, we can discuss about custom prices.',
    callToAction: 'Contact sales',
    click: selectEnterprise
  },
]

const allSubscriptionAdvantages = [
  { text: 'No throttling', slug: 'discovery'},
  { text: 'Unlimited analytics', slug: 'discovery' },
  { text: 'Unlimited support', slug: 'discovery' },
  { text: 'Up to 5,000 events', slug: 'discovery' },
  //
  { text: 'No throttling', slug: 'advanced'},
  { text: 'Unlimited analytics', slug: 'advanced' },
  { text: 'Unlimited support', slug: 'advanced' },
  { text: 'Unlimited events', slug: 'advanced', highlight: true },
  //
  { text: 'No throttling', slug: 'enterprise'},
  { text: 'Unlimited analytics', slug: 'enterprise' },
  { text: 'Unlimited support', slug: 'enterprise' },
  { text: 'Unlimited events', slug: 'enterprise', highlight: true }
]

const featureBlock = (block, index) => {
  if (isOdd(index)) {
    return (
      <div className="row features-block middle-xs center-xs" key={index}>
        <div className="col-xs-12 col-sm-5">
          <h3 className="features-block__title">{block.title}</h3>
          <p className="features-block__text">{block.description}</p>
          {block.extraContent()}
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
      <div className="row features-block middle-xs center-xs" key={index}>
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

  const filteredAdvantages = advantages.filter((advantage) => (advantage.slug === block.slug) || (advantage.subscriptionSlug === ''))

  return (<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={index}>
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
        <div className="button button--white" onClick={block.click}>
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
                  Agnostic job scheduler
                  </h2>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-xs-10 col-md-6">
                  <div className="introduction__underline">
                  Dispatch events on time, reduce infrastructure stress and integrate easily with your technical stack.
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
                    "Sign up for free now"}
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
