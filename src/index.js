import AchievementsList from './AchievementsList.js'
import AddAchievementForm from './AddAchievementForm.js'
import { guid } from './utils.js'
import { state, setState } from './state.js'

const element = document.querySelector('#achievements')
const initialAchievements = [
  {
    id: guid(),
    name: 'born',
    stars: 1,
  },
  {
    id: guid(),
    name: 'still alive',
    stars: 2,
  }
];

const storedAchievementsString = localStorage.getItem('achievements')
const achievements = storedAchievementsString ? JSON.parse(storedAchievementsString) : initialAchievements

setState({ achievements })

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
