const AddAchievementsForm = ({ onSubmit }) => {
  const element = document.createElement('form')
  const state = {
    name: '',
  }

  const handleAddAchievementClick = () => {
    onSubmit({
      name: state.name,
    })
  }

  const handleNameChange = (event) => {
    state.name = event.target.value
  }

  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.addEventListener('change', handleNameChange)

  const addButton = document.createElement('button')
  addButton.type = 'button'
  addButton.innerText = 'Add'
  addButton.addEventListener('click', handleAddAchievementClick)

  element.append(nameInput)
  element.append(addButton)

  return element
}

export default AddAchievementsForm
