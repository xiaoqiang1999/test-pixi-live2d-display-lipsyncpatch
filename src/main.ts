import initLive2DModel from './init-live2d.ts';

import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="live2d-container" class="live2d-container">
    <canvas id="live2d-canvas"></canvas>
  </div>
`;

const model4 = await initLive2DModel();
