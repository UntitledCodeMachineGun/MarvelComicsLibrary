import 'regenerator-runtime';
import 'core-js/stable';

import App from './components/App';
import Comics from './components/Comics';

(async () =>
{
  await App.render();

  Comics.eventListener();
})();