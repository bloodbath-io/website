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
import PrivacyImage from "../images/privacy.svg"
import FreeAssistanceImage from "../images/free-assistance.svg"

import SlowJsonImage from "../images/slow-json-image.svg"
import SearchInputImage from "../images/search-input-image.svg"
import BadSQLImage from "../images/bad-sql-image.svg"
import MicroServicesImage from "../images/micro-services-image.svg"
import GraphQLImage from "../images/graphql-image.svg"

import RubySample from "../images/ruby-sample.svg"
import PythonSample from "../images/python-sample.svg"
import NodeSample from "../images/node-sample.svg"

import Layout from "../components/layout"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css' // TODO: replace that by my own css

const codeSamples = (index) => {
  return (
    <Tabs className="tabs">
    <TabPanel className="tabs__panel">
      <div className="tabs__innerpanel">
        <a href="https://github.com/bloodbath-io/bloodbath-ruby" target="_blank">
          <img src={RubySample} />
        </a>
      </div>
    </TabPanel>
    <TabPanel className="tabs__panel">
      <div className="tabs__innerpanel">
        <a href="https://github.com/bloodbath-io/bloodbath-python" target="_blank">
          <img src={PythonSample} />
        </a>
      </div>
    </TabPanel>
    <TabPanel className="tabs__panel">
      <div className="tabs__innerpanel">
        <a href="https://github.com/bloodbath-io/bloodbath-node" target="_blank">
          <img src={NodeSample} />
        </a>
      </div>
    </TabPanel>
    <TabList>
      <Tab>Ruby</Tab>
      <Tab>Python</Tab>
      <Tab>Node</Tab>
    </TabList>

  </Tabs>
  )
}

const allFeatures = [
  {
    title: 'Easy to code',
    description: "Nothing to install, fast sign-up and super simple interface. We have a coders first approach. You can access our APIs in a few clicks and start coding your scenarios. We've also developed several libraries to make it even easier for you to integrate.",
    content: codeSamples,
    // image: {
    //   url: AccessibilityImage
    // },
    extraContent: () => {}
  },
  {
    title: 'Scale to your needs',
    description: "Add volume to your tests without worrying by using the scheduler as intensively as you need. We guarantee it'll be on time, every time. We're very serious about SLOs.",
    image: {
      url: ScalabilityImage
    },
    extraContent: () => {}
  },
  {
    title: 'Enjoy our analytics',
    description: "We digest data for you so you don't have to worry about this part. You'll understand the event flow right away just by reading our analysis.",
    image: {
      url: AnalyticsImage
    },
    extraContent: () => {}
  },
  {
    title: 'Free assistance',
    description: "We are ready to assist you if you struggle in writing your first scenarios. Your can schedule a call with our technical support and we'll help with the code itself.",
    image: {
      url: FreeAssistanceImage
    },
    extraContent: () => {}
  },
  {
    title: 'We take privacy seriously',
    description: "Storing endpoint responses could be a slippery road in terms of privacy. Our events-related data are purged after one day so you don't have to worry about that. You can have opt for no retention at all.",
    image: {
      url: PrivacyImage
    },
    extraContent: () => {}
  },
]

const allAbouts = [
  {
    title: 'The project',
    description: "The world is changing and there's an obvious technological need for precision. Our idea is simple, but very effective: removing the pain of scheduling & dispatching stress tests. Our solution is and will always be simple and flexible.",
    image: {
      url: TheAdvancedjectImage
    },
    extraContent: () => {}
  },
  {
    title: 'The company',
    description: "It was founded by Laurent Schaffner who's an experienced engineer. It's still in open beta and waiting for your feedback.",
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
    description: 'This is our most basic plan. It gives you 2,000 events to schedule and test our system out. All other functionalities are the same from the other plans.',
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
  { text: 'Up to 2,000 events', slug: 'discovery' },
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
        <div className="col-xs-12 first-xs col-sm-5 last-sm col-md-6 col-md-offset-1">
          <div className="features-block__image">
          {(block.image ? <img src={block.image.url} /> : block.content())}
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
                  Load testing and stress tests for developers.
                  </h2>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-xs-10 col-md-8">
                  <div className="introduction__underline">
                  Maximize the performance and reliability of your stack through our expert load and stress testing services for websites, APIs, and servers.
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
                    "Start your load testing"}
                  </button>
                  <button className="button button--white-alt" onClick={learnHow}>
                    What is it for?
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
        {/* Write your own scenarios */}
        <div className="container-fluid">
          <div className="row center-xs features" id="examples">
            <div className="col-lg-8 col-md-10 col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="features__punchline">
                    Write your own scenarios
                  </h2>
                </div>
              </div>


            <div className="row features-block middle-xs center-xs" key="0">
              <div className="col-xs-12 col-sm-5">
                <h3 className="features-block__title">Improving a slow JSON API endpoint</h3>
                <p className="features-block__text">You recently noticed a slow HTTP endpoint in production through your favorite monitoring tool. With Bloodbath, you can write a short scenario hitting it in a custom rhythm and easily compare the performances of your changes in a pre-production environment.</p>
              </div>
              <div className="col-xs-12 first-xs col-sm-5 last-sm col-md-6 col-md-offset-1">
                <div className="features-block__image">
                  <img src={SlowJsonImage} />
                </div>
              </div>
            </div>

            <div className="row features-block middle-xs center-xs" key="1">
              <div className="col-xs-12 col-sm-5 col-sm-offset-1">
                  <div className="features-block__image">
                    <img src={SearchInputImage} />
                  </div>
              </div>
              <div className="col-xs-12 col-sm-5 col-md-offset-1">
                <h3 className="features-block__title">Battletesting the performances of your search input</h3>
                <p className="features-block__text">You got a search input on your application and want to check if it'll be slow in some cases. Simply hit it in a specific timeframe with Bloodbath and feed it a set of random text for each iteration.</p>
              </div>
            </div>

            <div className="row features-block middle-xs center-xs" key="0">
              <div className="col-xs-12 col-sm-5">
                <h3 className="features-block__title">Spot badly written SQL queries</h3>
                <p className="features-block__text">You've recently noticed one of your SQL queries is really slow in production. In a specific timeframe, you can add new records while querying the table to get close to this real-life scenario to see what to improve directly in pre-production or locally.</p>
              </div>
              <div className="col-xs-12 first-xs col-sm-5 last-sm col-md-6 col-md-offset-1">
                <div className="features-block__image">
                  <img src={BadSQLImage} />
                </div>
              </div>
            </div>



            <div className="row features-block middle-xs center-xs" key="1">
              <div className="col-xs-12 col-sm-5 col-sm-offset-1">
                  <div className="features-block__image">
                    <img src={GraphQLImage} />
                  </div>
              </div>
              <div className="col-xs-12 col-sm-5 col-md-offset-1">
                <h3 className="features-block__title">Test out scalability of a complex GraphQL query</h3>
                <p className="features-block__text">N+1 are the nightmare of people using GraphQL, and it's really hard to compare performance changes before production. Thanks to Bloodbath, you can hit GraphQL queries with random data and see the obvious performance differences with your code changes.</p>
              </div>
            </div>

            <div className="row features-block middle-xs center-xs" key="0">
              <div className="col-xs-12 col-sm-5">
                <h3 className="features-block__title">Ensure balance in-between micro-services</h3>
                <p className="features-block__text">You write up complex scenarios with Bloodbath, involving tenth of micro-services or more at the same time to see which one experience scalability issues first. Write some code in a few minutes and see how it goes.</p>
              </div>
              <div className="col-xs-12 first-xs col-sm-5 last-sm col-md-6 col-md-offset-1">
                <div className="features-block__image">
                <img src={MicroServicesImage} />
                </div>
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
                    Our developer first approach
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
