import { applyStyles, imgSrc } from './../utils.js'
import { state, setState, subscribe } from './../state.js'
import StarsInput from './StarsInput.js'

let element;
const children = {};

export const EditAchievement = (achievement) => {
  const handleStarClick = (numberOfStars) => {
    setState({ editAchievement: {
      ...achievement,
      stars: numberOfStars,
    }});
  }

  const starsInput = StarsInput({
    stars: achievement.stars,
    onStarClick: handleStarClick,
  })

  if (!element) {
    element = document.createElement('div')

    element.addEventListener('click', () => {
      //setState({ editAchievement: undefined })
    })

    subscribe((state, previousState) => {
      if (state.editAchievement.stars !== previousState.editAchievement.stars) {
        const newStarsInput = StarsInput({
          stars: state.editAchievement.stars,
          onStarClick: handleStarClick,
        })
        children.starsInput.replaceWith(newStarsInput)
        children.starsInput = newStarsInput
      }
    })

    children.starsInput = starsInput


    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = achievement.name
    applyStyles(nameInput, {
      marginTop: '16px',
      fontSize: '2em',
      textAlign: 'center',
      width: '100%',
    })

    children.nameInput = nameInput

    const styles = {
      backgroundColor: '#b5e8ff',
      padding: `${1}em`,
      margin: '10px',
      borderRadius: '5px',
      width: '10em',
    }

    Object.keys(children).forEach(k => {
      element.append(children[k])
    })

    applyStyles(element, styles)
  }

  return element
}
