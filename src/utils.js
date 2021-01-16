export const applyStyles = (element, styles) => {
  for (let k in styles) {
    element.style[k] = styles[k]
  }
}

export const imgSrc = (path) => `images/${path}`

// https://stackoverflow.com/a/6860916/1657101
export const guid = () => {
  const S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1)
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
}
