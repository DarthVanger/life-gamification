import { applyStyles, imgSrc } from './utils.js'

const Achievement = ({ name }) => {
  const element = document.createElement('div')

  const medalIcon = document.createElement('img')
  medalIcon.src = imgSrc('medal.png')
  applyStyles(medalIcon, {
    height: '2em',
  })
  element.append(medalIcon)

  const nameElement = document.createElement('div')
  nameElement.innerText = name
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
