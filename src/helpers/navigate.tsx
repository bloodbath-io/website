import { Link, navigate } from "gatsby"

const earlyAccessEndpoint = 'https://j245chq3e8t.typeform.com/to/EvqyWIyL'

export const goHome = () => {
  navigate('/')
}

export const signIn = () => {
  navigate(earlyAccessEndpoint)
}

export const signUp = () => {
  navigate(earlyAccessEndpoint)
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
