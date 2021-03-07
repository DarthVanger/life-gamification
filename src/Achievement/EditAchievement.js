import { applyStyles, imgSrc } from './../utils.js'
import { state, setState } from './../state.js'

export const EditAchievement = (achievement) => {
  const element = document.createElement('div')

  element.addEventListener('click', () => {
    setState({ editAchievement: undefined })
  })

  const medalIcon = document.createElement('img')
  medalIcon.src = imgSrc('medal.png')
  applyStyles(medalIcon, {
    height: '2em',
  })
  element.append(medalIcon)

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.value = achievement.name
  applyStyles(nameInput, {
    marginTop: '16px',
    fontSize: '2em',
    textAlign: 'center',
    width: '100%',
  })
  element.append(nameInput)

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
