import App from '/src/components/App/App';
import Comics from '/src/components/Comics/Comics';

(async () =>
{
  await App.render();

  Comics.eventListener();
})();
