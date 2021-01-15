export const applyStyles = (element, styles) => {
  for (let k in styles) {
    element.style[k] = styles[k]
  }
}

export const imgSrc = (path) => `images/${path}`
