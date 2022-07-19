import App from './components/App/index.js';
import Comics from './components/Comics/index.js';

(async () =>
{
  await App.render();

  Comics.eventListener();
})();
