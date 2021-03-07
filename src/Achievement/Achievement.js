import { applyStyles, imgSrc } from './../utils.js'
import { state, setState } from './../state.js'
import Stars from './Stars.js'

const Achievement = (achievement) => {
  const element = document.createElement('div')

  element.addEventListener('click', () => {
    setState({ editAchievement: achievement })
  })

  element.append(Stars(achievement))

  const nameElement = document.createElement('div')
  nameElement.innerText = achievement.name
  applyStyles(nameElement, {
    marginTop: '16px',
    fontSize: '2em',
    textAlign: 'center',
  })
  element.append(nameElement)

  const styles = {
    backgroundColor: '#b5e8ff',
    padding: `${1}em`,
    margin: '10px',
    borderRadius: '5px',
    width: '10em',
  }

  applyStyles(element, styles)

  return element
}

export default Achievement
