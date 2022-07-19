import App from '/src/components/App/index.js';
import Comics from '/src/components/Comics/index.js';

(async () =>
{
  await App.render();

  Comics.eventListener();
})();
