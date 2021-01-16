export let state = {}

export const setState = (stateUpdate) => {
  const newState = { ...state, ...stateUpdate }
  notifySubscribers(newState, state)
  state = newState
}

const subscribers = []
export const subscribe = (subscriber) => {
  subscribers.push(subscriber)
}

const notifySubscribers = (...params) => subscribers.forEach(s => s(...params))
