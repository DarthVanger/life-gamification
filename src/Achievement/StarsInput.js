import { applyStyles, imgSrc } from './../utils.js'
import { state, setState } from './../state.js'

const StarsInput = ({ stars, onStarClick }) => {
  const element = document.createElement('div')

  for (let starIndex = 0; starIndex < 5; starIndex++) {
    const medalIcon = document.createElement('img')
    medalIcon.src = imgSrc('medal.png')
    applyStyles(medalIcon, {
      height: '2em',
      opacity: starIndex < stars ? '1' : '0.5',
    })

    medalIcon.addEventListener('click', () => {
      onStarClick(starIndex + 1)
    })

    element.append(medalIcon)
  }

  return element
}

export default StarsInput
