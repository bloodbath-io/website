import { Link, navigate } from "gatsby"

const mainEndpoint = 'https://app.bloodbath.io'
const signupEndpoint = 'https://app.bloodbath.io/signup'
const signinEndpoint = 'https://app.bloodbath.io/signin'

export const goHome = () => {
  navigate('/')
}

export const signIn = () => {
  navigate(signinEndpoint)
}

export const signUp = () => {
  navigate(signupEndpoint)
}

export const learnHow = () => {
  navigate('#features')
}

export const goDown = () => {
  navigate('#features')
}

export const selectDiscovery = () => {
  navigate(signupEndpoint)
}

export const selectAdvanced = () => {
  navigate(signupEndpoint)
}

export const selectEnterprise = () => {
  window.open('mailto:sales@bloodbath.io')
}

export const bottomSignUp = () => {
  navigate(signupEndpoint)
}
