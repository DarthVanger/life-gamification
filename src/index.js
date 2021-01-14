import AchievementsList from './AchievementsList.js'
const element = document.querySelector('#achievements')
const initialAchievements = [
  {
    name: 'born'
  },
  {
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
  //element.append(AddAchievementForm())
}

render()
