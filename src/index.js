import App from 'https://untitledcodemachinegun.github.io/MarvelComicsLibrary/src/components/App/';
import Comics from 'https://untitledcodemachinegun.github.io/MarvelComicsLibrary/src/components/Comics/';

(async () =>
{
  await App.render();

  Comics.eventListener();
})();
