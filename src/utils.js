export const applyStyles = (element, styles) => {
  for (let k in styles) {
    element.style[k] = styles[k]
  }
}

export const imgSrc = (path) => `images/${path}`

const states = new Map()
const initState = (component) => {
  states.set(component, {})
}

export const useState = (component, element, props) => {
  !states.has(component) && initState(component)

  const state = states.get(component)
  const setState = (newState) => {
    for (let k in newState) {
      newState.hasOwnProperty(k) && (state[k] = newState[k])
    }
    const parentNode = element.parentNode
    const previousSibling = element.previousSibling
    const render = () => {
      previousSibling ? previousSibling.after(component(props)) : parentNode.prepend(component(props))
    }
    element.remove()
    render()
  }

  return [state, setState]
}
