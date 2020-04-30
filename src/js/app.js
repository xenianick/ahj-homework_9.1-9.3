import createNewElement from './createNewElement.js';
import CollapseText from './CollapseText.js';
import LikeBtn from './LikeBtn.js';
import PopupChat from './PopupChat.js';

const bodyEl = document.querySelector('body');
const mainContainer = createNewElement('div', 'main-container');
bodyEl.appendChild(mainContainer);

const collapseTextWidget = new CollapseText('Num alio genere Furiarum declamatores inquietantur, qui clamant: "Haec vulnera pro libertate publica excepi; hunc oculum pro vobis impendi: date mihi ducem, qui me ducat ad liberos meos, nam succisi poplites membra non sustinent"?');
mainContainer.appendChild(collapseTextWidget.html);

const likeBtnWidget = new LikeBtn();
mainContainer.appendChild(likeBtnWidget.html);

const popupChatWidget = new PopupChat();
mainContainer.appendChild(popupChatWidget.html);
