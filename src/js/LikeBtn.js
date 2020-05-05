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

    function createHeartIcon() {
      const heartIcon = createNewElement('img', 'heart-icon icon-soaring-1');
      heartIcon.src = './heart.png';
      return heartIcon;
    }

    likeBtn.addEventListener('click', () => {
      const heartIcon = createHeartIcon();
      likeBtnContainer.appendChild(heartIcon);

      heartIcon.addEventListener('animationstart', () => {
        const num = getRandom(1, 5);
        heartIcon.className = `heart-icon icon-soaring-${num}`;
      });
      heartIcon.addEventListener('animationend', () => {
        heartIcon.remove();
      });
    });

    return likeBtnContainer;
  }
}
