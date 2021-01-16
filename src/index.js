import AchievementsList from './AchievementsList.js'
import AddAchievementForm from './AddAchievementForm.js'
import { guid } from './utils.js'

const element = document.querySelector('#achievements')
const initialAchievements = [
  {
    id: guid(),
    name: 'born'
  },
  {
    id: guid(),
    name: 'still alive'
  }
];

const storedAchievementsString = localStorage.getItem('achievements')
const achievements = storedAchievementsString ? JSON.parse(storedAchievementsString) : initialAchievements

const addAchievement = (achievement) => {
  achievements.unshift(achievement)
  localStorage.setItem('achievements', JSON.stringify(achievements))
  render()
}

const render = () => {
  element.innerHTML = ''
  element.append(AchievementsList({ achievements }))
  element.append(AddAchievementForm({ onSubmit: addAchievement }))
}

render()
