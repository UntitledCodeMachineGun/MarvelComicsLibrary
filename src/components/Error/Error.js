import classes from './Error.css';

import { ROOT_INDEX } from '../../constants/root';

class Error
{
  render()
  {
    const htmlWrapper = 
    `
      <div class="${classes.error__container}">
        <span>
          <p class="${classes.error__alert}">An error occurred!</p>
          <p class="${classes.error__alert}">Please try again later.</p>
        </span>
      </div>
    `;

    ROOT_INDEX.innerHTML = htmlWrapper;
  }
}

export default new Error();