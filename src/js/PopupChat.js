/* eslint-disable class-methods-use-this */
import createNewElement from './createNewElement.js';

export default class PopupChat {
  constructor() {
    this.html = this.createHtml();
  }

  createHtml() {
    const chatContainer = createNewElement('div', 'chat-container');
    const openChatBtn = createNewElement('button', 'open-chat-btn');
    openChatBtn.type = 'button';
    chatContainer.appendChild(openChatBtn);
    const chatPopup = createNewElement('form', 'chat-poup hide-el');
    const closeChatBtn = createNewElement('div', 'close-chat-btn', '&#10006;');
    const chatHeader = createNewElement('div', 'chat-header', 'Напишите нам');
    const chatText = createNewElement('textarea', 'chat-text');
    const sendBtn = createNewElement('button', 'send-btn', 'Отправить');

    chatPopup.appendChild(closeChatBtn);
    chatPopup.appendChild(chatHeader);
    chatPopup.appendChild(chatText);
    chatPopup.appendChild(sendBtn);

    function popupRemove() {
      chatPopup.remove();
    }
    function popupShow() {
      chatPopup.classList.add('show-popup');
    }

    openChatBtn.addEventListener('click', () => {
      chatPopup.removeEventListener('transitionend', popupRemove);
      chatContainer.appendChild(chatPopup);
      openChatBtn.addEventListener('transitionstart', popupShow);
      openChatBtn.classList.add('hide-btn');
    });
    closeChatBtn.addEventListener('click', () => {
      openChatBtn.removeEventListener('transitionstart', popupShow);
      chatPopup.addEventListener('transitionend', popupRemove);
      chatPopup.classList.remove('show-popup');
      openChatBtn.classList.remove('hide-btn');
    });

    return chatContainer;
  }
}
