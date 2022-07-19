import Comics from '../Comics/Comics.js';

class App
{
  async render()
  {
    await Comics.render();
  }
}

export default new App();
