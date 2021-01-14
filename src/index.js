const achievementsElement = document.querySelector('#achievements')
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
  const state = {
    name: '',
  }

  const achievementsList = achievements
    .map(achievement => `
      <p>${achievement.name}</p>  
    `)
    .join('');

  window.handleAddAchievementClick = () => {
    addAchievement({
      name: state.name,
    })
  }

  window.handleNameChange = (input) => {
    state.name = input.value
  }

  const achievementNameInput = `<input type="text" onchange="handleNameChange(this)" />`
  const addAchievementButton = `<button onclick="handleAddAchievementClick(this)">new</button>`;

  achievementsElement.innerHTML = `
    ${achievementsList}
    ${achievementNameInput}
    ${addAchievementButton}
  `
}

render()
