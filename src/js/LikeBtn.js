/* eslint-disable class-methods-use-this */
import createNewElement from './createNewElement.js';
import getRandom from './getRandom.js';

export default class LikeBtn {
  constructor(text) {
    this.text = text;
    this.html = this.createHtml();
  }

  createHtml() {
    const likeBtnContainer = createNewElement('div', 'like-btn-container');
    const likeBtn = createNewElement('button', 'like-btn', 'Like');
    likeBtn.type = 'button';
    likeBtnContainer.appendChild(likeBtn);

    const heartIcon1 = createNewElement('img', 'heart-icon-1 icon-soaring-1');
    const heartIcon2 = createNewElement('img', 'heart-icon-2 icon-soaring-2');

    heartIcon1.src = './heart.png';
    heartIcon2.src = './heart.png';

    likeBtn.addEventListener('mouseover', () => {
      likeBtnContainer.appendChild(heartIcon1);
      likeBtnContainer.appendChild(heartIcon2);
    });
    likeBtn.addEventListener('mouseout', () => {
      heartIcon1.remove();
      heartIcon2.remove();
    });

    heartIcon1.addEventListener('animationiteration', () => {
      const num = getRandom(1, 5);
      heartIcon1.className = `heart-icon-1 icon-soaring-${num}`;
    });
    heartIcon2.addEventListener('animationiteration', () => {
      const num = getRandom(1, 5);
      heartIcon2.className = `heart-icon-2 icon-soaring-${num}`;
    });

    return likeBtnContainer;
  }
}
