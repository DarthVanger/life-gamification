import { applyStyles } from './utils.js'
import Achievement from './Achievement.js'

const AchievementsList = ({ achievements }) => {
  const element = document.createElement('div')

  const styles = {
    display: 'flex'
  }

  applyStyles(element, styles)

  achievements.forEach(item => {
    element.append(Achievement(item))
  })

  return element
}

export default AchievementsList
