import { Link, navigate } from "gatsby"

const earlyAccessEndpoint = 'https://app.bloodbath.io'

export const goHome = () => {
  navigate('/')
}

export const signIn = () => {
  navigate('https://app.bloodbath.io/signin')
}

export const signUp = () => {
  navigate('https://app.bloodbath.io/signup')
}

export const learnHow = () => {
  navigate('#features')
}

export const goDown = () => {
  navigate('#features')
}

export const selectSmallOffice = () => {
  navigate(earlyAccessEndpoint)
}

export const selectGrowingOffice = () => {
  navigate(earlyAccessEndpoint)
}

export const selectBigOffice = () => {
  navigate(earlyAccessEndpoint)
}

export const bottomSignUp = () => {
  navigate(earlyAccessEndpoint)
}
