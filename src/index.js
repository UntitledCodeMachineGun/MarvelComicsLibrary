import App from './components/App/App.js';
import Comics from './components/Comics/Comics.js';

(async () =>
{
  await App.render();

  Comics.eventListener();
})();
