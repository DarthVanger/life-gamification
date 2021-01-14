  //const state = {
  //  name: '',
  //}

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

