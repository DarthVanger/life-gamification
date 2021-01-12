const achievementsElement = document.querySelector('#achievements')
const achievements = [{
  name: 'test'
}];

const render = () => {
  const html = achievements
    .map(achievement => `
      <p>${achievement.name}</p>  
    `)
    .join('');

  achievementsElement.innerHTML = html;
}

render();
