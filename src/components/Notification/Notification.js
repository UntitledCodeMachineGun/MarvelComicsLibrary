import { ROOT_MODAL } from '../../constants/root';

import classes from "./Notification.css";

import imgCloseBlack from './img/close_black.png';

class Notification
{
  render()
  {
    const htmlWrapper =
    `
      <div class="${classes.notification__container}">
        <span>No content</span>
        <button
          class="btn ${classes.notification__close}"
          onclick="modal.innerHTML = ''"
        ><img class="img-cover close-img" src="${imgCloseBlack}" /></button>
      </div>
    `;

    ROOT_MODAL.innerHTML = htmlWrapper;
  }
}

export default new Notification();