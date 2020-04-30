import createNewElement from './createNewElement.js';

export default class CollapseText {
  constructor(text) {
    this.text = text;
    this.html = this.createHtml();
  }

  createHtml() {
    const collapseContainer = createNewElement('div', 'collapse-container');
    const collapseBtn = createNewElement('button', 'collapse-btn', 'Collapse');
    collapseBtn.type = 'button';
    const textContainer = createNewElement('div', 'text-container', `<p>${this.text}</p>`);

    collapseContainer.appendChild(collapseBtn);
    collapseContainer.appendChild(textContainer);

    collapseBtn.addEventListener('click', () => {
      collapseContainer.classList.toggle('with-transition-container');
      textContainer.classList.toggle('with-transition-text');
    });

    return collapseContainer;
  }
}
