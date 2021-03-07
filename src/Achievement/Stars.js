import { applyStyles, imgSrc } from './../utils.js'
import { state, setState } from './../state.js'

const Stars = (achievement) => {
  const element = document.createElement('div')

  for (let i = 0; i < achievement.stars; i++) {
    const medalIcon = document.createElement('img')
    medalIcon.src = imgSrc('medal.png')
    applyStyles(medalIcon, {
      height: '2em',
    })
    element.append(medalIcon)
  }

  return element
}

export default Stars 
