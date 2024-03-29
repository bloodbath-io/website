import { Link, navigate } from "gatsby"

const mainEndpoint = 'https://app.bloodbath.io'
const signupEndpoint = 'https://app.bloodbath.io/signup'
const signinEndpoint = 'https://app.bloodbath.io/signin'
const githubRubyEndpoint = 'https://github.com/bloodbath-io/bloodbath-ruby'

export const goHome = () => {
  navigate('/')
}

export const signIn = () => {
  window.open(signinEndpoint)
}

export const signUp = () => {
  window.open(signupEndpoint)
}

export const seeGithubRuby = () => {
  window.open(githubRubyEndpoint)
}

export const learnHow = () => {
  navigate('#examples')
}

export const goDown = () => {
  navigate('#features')
}

export const selectDiscovery = () => {
  window.open(signupEndpoint)
}

export const selectAdvanced = () => {
  window.open(signupEndpoint)
}

export const selectEnterprise = () => {
  window.open('mailto:sales@bloodbath.io')
}

export const bottomSignUp = () => {
  navigate(signupEndpoint)
}
