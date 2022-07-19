import App from 'src/components/App';
import Comics from 'src/components/Comics';

(async () =>
{
  await App.render();

  Comics.eventListener();
})();
