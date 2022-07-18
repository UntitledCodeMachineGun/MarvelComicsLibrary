import { IMG_STANDARD_XLARGE } from '../../constants/api';
import { getDataApi } from '../../utils/GetDataApi';
import { ROOT_MODAL } from '../../constants/root';

import Notification from '../Notification/Notification';

import imgCloseBlue from './img/close_blue.png';

import classes from "./Characters.css";

class Characters
{
  renderContent(data)
  {
    let htmlContent = '';

    data.forEach(({ name, thumbnail: {path, extension} }) =>
    {
      const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;
      
      htmlContent +=
      `
        <li class="${classes.characters__item}">
          <img class="img-cover ${classes.characters__img}" src="${imgSrc}" />
          <span class="${classes.characters__name}">${name}</span>
        </li>
      `;
    });

    const htmlWrapper =
    `
      <div class="${classes.wrapper}">
        <ul class="${classes.characters__container}">
          ${htmlContent}
        </ul>
        <button
          class="btn ${classes.characters__close}"
          onclick="modal.innerHTML = ''"
        ><img class="img-cover close-img" src="${imgCloseBlue}" /></button>
      </div>
    `;

    ROOT_MODAL.innerHTML = htmlWrapper;
  }

  async render(uri)
  {
    const data = await getDataApi.getData(uri);

    data.length ? this.renderContent(data) : Notification.render();
  }
}

export default new Characters();