import initLive2DModel from './init-live2d.ts';

import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="live2d-container" class="live2d-container">
    <canvas id="live2d-canvas"></canvas>
  </div>

  <button id="speak-btn">Speak</button>
`;

(async () => {
  const model4 = await initLive2DModel();

  const speakBtn = document.querySelector<HTMLButtonElement>('#speak-btn')!;
  speakBtn.addEventListener('click', () => {
    model4.speak('./sound.mp3');
    /** soumd.mp3
     * Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to build server-side applications using JavaScript. It's built on the V8 JavaScript engine and is designed to efficiently handle a large number of concurrent connections, making it ideal for building scalable and high-performance applications.
     */
  });
})();
