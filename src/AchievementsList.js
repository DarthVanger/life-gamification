import Achievement from './Achievement.js'

const AchievementsList = ({ achievements }) => {
  const element = document.createElement('div')

  achievements.forEach(item => {
    element.append(Achievement(item))
  })

  return element
}

export default AchievementsList
