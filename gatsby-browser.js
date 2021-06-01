import "./src/styles/app.scss"

const ensureCorrectURL = () => {
  if (window.location.hostname.indexOf('www') === 0) {
    window.location = window.location.href.replace('www.', '')
  }
  if (window.location.pathname.indexOf('/en') === 0) {
    window.location = window.location.href.replace('/en', '')
  }
}

export const onClientEntry = () => {
  window.onload = () => {
    ensureCorrectURL()
  }
}

export const shouldUpdateScroll = ({ routerProps }) => {
  const hasAnchor = !!routerProps.location.hash; // (ie. /#features)

  return hasAnchor
}
