import { applyStyles } from './utils.js'
import Achievement from './Achievement.js'
import { EditAchievement } from './EditAchievement.js'
import { subscribe } from './state.js'

const AchievementsList = ({ achievements }) => {
  const element = document.createElement('div')

  subscribe((state, previousState) => {
    if (state.editAchievement !== previousState.editAchievement) {
      if (state.editAchievement) {
        const { editAchievement } = state
        const achievementElement = children.get(editAchievement.id)
        const newElement = EditAchievement(editAchievement)
        children.set(editAchievement.id, newElement)
        achievementElement.replaceWith(newElement)
      } else if (previousState.editAchievement) {
        const { editAchievement } = previousState
        const editAchievementElement = children.get(editAchievement.id)
        const newElement = Achievement(achievements.find(a => a.id === editAchievement.id))
        children.set(editAchievement.id, newElement)
        editAchievementElement.replaceWith(newElement)
      }
    }
  })

  const styles = {
    display: 'flex'
  }

  applyStyles(element, styles)

  const children = new Map(achievements.map(item => [item.id, Achievement(item)]))

  element.append(
    Array.from(children.values())
      .reduce((acc, cur) => {
        acc.append(cur)
        return acc
      }, new DocumentFragment())
  )

  return element
}

export default AchievementsList
