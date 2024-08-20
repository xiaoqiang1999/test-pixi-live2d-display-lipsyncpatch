/** npm package import
 * If you use the script tag to import， you must comment this paragraph
 */
import { Live2DModel } from 'pixi-live2d-display-lipsyncpatch/cubism4';
import * as PIXI from 'pixi.js';
window.PIXI = PIXI;
/**
 * End: npm package import
 */

const cubism4ModelURL = './live2d-haru/haru_greeter_t03.model3.json';

export default async function initLive2DModel() {
  const canvasEl = document.getElementById('live2d-canvas') as HTMLCanvasElement;
  const containerEl = document.getElementById('live2d-container') as HTMLDivElement;

  const app = new window.PIXI.Application({
    view: canvasEl,
    autoStart: true,
    resizeTo: containerEl,
    backgroundAlpha: 0, // 背景透明度 0完全透明
    resolution: window.devicePixelRatio, // 配置这个值 解决canvas在高分屏显示模糊的问题
    powerPreference: 'low-power', // 设置渲染的功率
    autoDensity: true, // 启用自动密度，以便根据设备像素比自动调整画布大小
    // antialias: true, // 抗锯齿
  });

  /** npm package import */
  const model4 = await Live2DModel.from(cubism4ModelURL, {
    autoInteract: true,
  });
  /** Script Tag Import */
  // const model4 = await window.PIXI.live2d.Live2DModel.from(cubism4ModelURL, {
  //   autoInteract: true,
  // });

  const resizeModel = () => {
    const canvas = canvasEl;
    if (!canvas) return;

    const cssWidth = canvasEl.clientWidth;
    const cssHeight = canvasEl.clientHeight;

    /**
     * 此model默认的宽高为 4500x2400 计算出比例为 15:8
     */
    model4.height = cssHeight; // 高度等于容器高度
    model4.width = (model4.height / 15) * 8; // 宽度通过高度计算而来 与高度保持15:8的比例 避免拉伸变形
    model4.x = (cssWidth - model4.width) / 2; // 让模型水平居中显示
  };
  resizeModel();

  app.renderer.on('resize', () => {
    resizeModel();
  });

  app.stage.addChild(model4);

  // interaction
  // model4.on('hit', hitAreas => {
  //   if (hitAreas.includes('body')) {
  //     model4.motion('tap_body');
  //   }
  // });

  return model4;
}
